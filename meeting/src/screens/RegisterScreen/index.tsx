import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import { api } from '../../server/api';
import { format } from 'date-fns';
import { FieldValues, useForm } from 'react-hook-form';
import { SelectModal } from '../SelectModal';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { Container, FormContainer, Title, Content, ContentButton, ButtonTitle, Button, ButtonImage, TextImage } from './styles';

type DataType = {
  name: string,
  address: string,
  email: string,
  number: string,
  category: string,
  date: string,
  image: string | null
}

export function RegisterScreen() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [category, setCategory] = useState({key: "categoria", name:"Selecione a categoria"});
  const [image, setImage] = useState<string | null>(null)

  const {control, handleSubmit, reset} = useForm();

  async function postSuppliers(data: DataType){
    try{
      await api.post('/fornecedores', data)

    }catch(erro){
      Alert.alert('Erro no cadastro. Tente novamente mais tarde.')
    }
  }

  async function convertImageToBase64(uri: string){
    try{
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return `data:image/jpeg;base64,${base64}`;

    }catch(erro){
      Alert.alert('Erro ao converter imagem para Base64')
    }

  }

  async function handleSelectImage(){
    try{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4 ],
        quality: 1,
      })
      if(!result.canceled){
        setImage(result.assets[0].uri)
      }
      
    }catch(erro){
      Alert.alert('Erro ao carregar a imagem. Tente novamente mais tarde.')
    }
  }

  function clear(){
    setCategory({key: "categoria", name:"Selecione a categoria"});
    setImage(null);
    reset({
      name: '',
      address: '',
      email: '',
      number: ''
    })
  }

  function handleOpenModal(){
    setIsOpenModal(true)
  }

  function handleCloseModal(){
    setIsOpenModal(false)
  }

  async function handleRegister(form: FieldValues){

    const currentDate = format(new Date(), 'dd/MM/yyyy') 

    let base64Image = null;
    if(image){
      base64Image = await convertImageToBase64(image)
    }

    const data = {
      name: form.name,
      address: form.address,
      email: form.email,
      number: form.number,
      category: category.key,
      date: currentDate,
      image: base64Image || null
    }
    if(category.key !== 'categoria'){
      data.category = category.key
    }
    await postSuppliers(data)
    clear()
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header screenName={'Cadastro de fornecedor'}/>

        <Content>
          <FormContainer>
            <Title>Dados do fornecedor</Title>
            <Input 
              name='name' 
              control={control} 
              placeholder='Nome do fornecedor' 
              autoCapitalize='sentences' 
              autoCorrect={false}
              rules={{required: true}}
            />
            <Input 
              name='address' 
              control={control} 
              placeholder='Endereço'
              autoCapitalize='sentences' 
              autoCorrect={false}
              rules={{required: true}}
            />
            <Input 
              name='email' 
              control={control} 
              placeholder='Email'
              autoCapitalize='none' 
              autoCorrect={false}
              rules={{required: true}}
            />
            <Input 
              name='number' 
              control={control} 
              placeholder='Telefone (11 dígitos)'
              keyboardType='numeric'
              rules={{required: true}}
            />
            <CategorySelectButton title={category.name} onPress={handleOpenModal}/>

          </FormContainer>

          <ContentButton>
            <ButtonImage onPress={handleSelectImage}>
              { image ? (
                <Image source={{uri: image}} style={{width: '100%', height: '100%', borderRadius: 10}} />
              ) : 
              <TextImage>
              Adicione uma imagem
              </TextImage>
              }
            </ButtonImage>
            
            <Button onPress={handleSubmit(handleRegister)}>
              <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
          </ContentButton>

          <Modal visible={isOpenModal}>
            <SelectModal setCategory={setCategory} close={handleCloseModal} />
          </Modal>
          
        </Content>
      </Container>
    </TouchableWithoutFeedback>
    
  );
}
