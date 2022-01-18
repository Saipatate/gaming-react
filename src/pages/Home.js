import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import banner from '../images/banner.png';
import News from './News';

const Home = () => {
  return (
    <>
      <Container>
      <Title>
        La meilleur boutique de <br /> vente dans le gaming
      </Title>
      <Banner src={banner} alt="banner" />
    </Container>
    <News />
    <Footer />
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
`

const Banner = styled.img`
  width: 890px;
`

export default Home;