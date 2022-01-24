import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import banner from '../images/banner.png';
import News from './News';

const Home = ({ colors }) => {

  return (
    <>
      <Container>
      <Title color={colors.$text}>
        La meilleur boutique de <br /> vente dans le gaming
      </Title>
      <Banner src={banner} alt="banner" />
    </Container>
    <News colors={colors}/>
    <Footer colors={colors} />
    </>
  );
};

const Container = styled.div`
  padding: 0 3%;
  height: 88vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 60px;
  color: ${props => props.color};

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }
`

const Banner = styled.img`
  width: 890px;

  @media (max-width: 1230px) {
    width: 600px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export default Home;