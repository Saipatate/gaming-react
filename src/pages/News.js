import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Title, NewImg } from '../components/Components';

class News extends Component {

  render() {
    return (
      <Container>
        <Title>Les Nouveautés</Title>
        <NewsContent>
          <Box>
            <NewImg src='../assets/pc/pc1.png'></NewImg>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia libero repellat perferendis vero animi molestias dolores at dolorum illum accusantium, aperiam iusto alias nam esse fugit similique facilis exercitationem architecto. 
            </Paragraph>
            <Button>En savoir plus</Button>
          </Box>
          <Box>
            <NewImg src='../assets/pc/pc3.png'></NewImg>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia libero repellat perferendis vero animi molestias dolores at dolorum illum accusantium, aperiam iusto alias nam esse fugit similique facilis exercitationem architecto. 
            </Paragraph>
            <Button>En savoir plus</Button>
          </Box>
          <Box>
            <NewImg src='../assets/screen/screen1.png'></NewImg>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia libero repellat perferendis vero animi molestias dolores at dolorum illum accusantium, aperiam iusto alias nam esse fugit similique facilis exercitationem architecto. 
            </Paragraph>
            <Button>En savoir plus</Button>
          </Box>
        </NewsContent>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 4% 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NewsContent = styled.div`
  padding: 20px;
  display: flex;
  width: 1200px;
  height: 100%;

  @media (max-width: 1230px) {
    width: 100%;
  }
  
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`

const Box = styled.div`
  margin: 15px;
  padding: 15px;
  width: 350px;
  border-radius: 5px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  transition: .4s;

  &:hover {
    transform: translateY(15px);
    transition: .4s;
  }
  
  @media (max-width: 950px) {
    margin: 50px;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
` 

const Paragraph = styled.p`
  margin-top: 95px;
  margin-bottom: 25px;
  font-weight: 500;
`

export default News;
