import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const NotFound = ({ colors }) => {
  return (
    <>
      <Container>
        <TitleNotFound color={colors.$text}>404</TitleNotFound>
        <Paragraph color={colors.$text}>Page non trouvée :/</Paragraph>
        <Link href="/">Retourner à l'accueil</Link>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const TitleNotFound = styled.h1`
  font-size: 6rem;
  color: ${props => props.color};
`
const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: ${props => props.color};
`

const Link = styled.a`
  color: #fff;
  font-weight: 500;
  background: #8a00ff;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export default NotFound;