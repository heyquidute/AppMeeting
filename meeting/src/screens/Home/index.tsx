import React from 'react';
import { Container, Logo, Title, ContentButton, Button, ButtonTitle } from './styles';

export function Home({ navigation }: any) {
  return (
    <Container>
      <Logo/>
      <Title>Meeting</Title>
      <ContentButton>
        <Button onPress={() => navigation.navigate('RegisterScreen')}>
          <ButtonTitle>Cadastrar fornecedor</ButtonTitle>
        </Button>
        <Button onPress={() => navigation.navigate('ListScreen')}>
          <ButtonTitle>Lista de fornecedores</ButtonTitle>
        </Button>
      </ContentButton>
    </Container>
  );
}
