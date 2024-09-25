import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useForm } from 'react-hook-form';
import { api } from '../../server/api';
import theme from '../../theme';
import { formatPhoneNumber } from '../../helpers/formatted';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { SupplierCard, SupplierCardProps } from '../../components/SupplierCard';
import { Container, Content, ContainerList } from './styles';
import { useIsFocused } from '@react-navigation/native';
import { Input } from '../../components/Input';

export type ListCardType = {
  id: string;
} & Pick<SupplierCardProps, "name" | "email" | "category" | "image" | "address" | "number">

export function ListScreen() {

  const isFocused = useIsFocused();
  const [suppliers, setSuppliers] = useState<ListCardType[]>();
  const [loading, setLoading] = useState(false);
  const [filteredSuppliers, setFilteredSuppliers] = useState<ListCardType[]>([]);
  const { control, watch } = useForm();

  const searchTerm = watch('search');

  async function fetchSuppliers(){
    try{
      setLoading(true);
      const { data } = await api.get('/fornecedores');
      setSuppliers(data);
      setFilteredSuppliers(data)

    }catch(erro){
      console.log(erro);
      Alert.alert('Erro no servidor. Tente novamente mais tarde');

    }finally{
      setLoading(false);
    }
  }

  function renderListSuppliers(){
    return(
      <ContainerList>
        <FlatList
          data={filteredSuppliers}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => 
              <SupplierCard 
              name={item.name}
              email={item.email}
              number={formatPhoneNumber(item.number)}
              category={item.category}
              image={item.image} 
              address={item.address}/>
          }
        />
      </ContainerList>
    )
  }

  useEffect(() => {
    fetchSuppliers();
  }, [isFocused])

  useEffect(() => {
    if(searchTerm){
      const filtered = suppliers?.filter((suppliers) =>
        suppliers.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];
      setFilteredSuppliers(filtered)
    } else {
      setFilteredSuppliers(suppliers || [])
    }
  },[searchTerm, suppliers])

  return (
    <Container>
      <Header screenName={'Lista de fornecedores'}/>
      <Content>
        <Input
          name='search'
          control={control}
          placeholder='Pesquisar fornecedor'
          autoCapitalize='none'
        />
        {loading ? <Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY}/> : renderListSuppliers() }  
      </Content>
    </Container>
  );
}
