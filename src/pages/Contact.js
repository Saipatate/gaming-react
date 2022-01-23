import React from 'react';
import styled from 'styled-components';
import { TitleShop, TitleContent, Button } from '../components/Components';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <TitleContent>
      <TitleShop>Contatez-Nous</TitleShop>
    </TitleContent>
    <Container>
      <Box>
        <FormContent>
          <Left>
            <Input type="text" placeholder='Nom' />
            <Input type="text" placeholder='Prénom' />
            <Input type="email" placeholder='E-mail' />
            <Input type="tel" placeholder='Téléphone' />
          </Left>
          <Right>
            <TextArea placeholder="Saisissez ici..."></TextArea>
          </Right>
        </FormContent>
        <Button>Envoyer</Button>
      </Box>
    </Container>
    <Footer />
    </>
  );
};

const Container = styled.div`
  padding: 0 3%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: start;
`

const Box = styled.div`
  border-radius: 5px;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const FormContent = styled.div`
  display: flex;

  @media (max-width: 445px) {
    flex-direction: column;
    align-items: center;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Right = styled.div`

`

const TextArea = styled.textarea`
  border-radius: 5px;
  padding: 8px;
  height: 91%;
  margin: 10px 0;
  resize: none;
  outline: none;
  border: 2px solid #8a00ff;

  @media (max-width: 445px) {
    width: 178px;
    height: 150px;
  }
`

const Input = styled.input`
  border-radius: 5px;
  margin: 10px 0;
  margin-right: 25px;
  padding: 8px;
  outline: none;
  border: 2px solid #8a00ff;

  @media (max-width: 445px) {
    margin-right: 0;
  }
`

export default Contact;