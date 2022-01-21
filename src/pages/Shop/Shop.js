import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Img } from '../../components/Components';

class Shop extends Component {
  render() {
    let {picture, status} = this.props.item;

    return (
      <Box>
        <Img src={picture}></Img>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia libero repellat perferendis vero animi molestias dolores at dolorum illum accusantium, aperiam iusto alias nam esse fugit similique facilis exercitationem architecto. 
        </Paragraph>
        <BoxContent>
          <Button>En savoir plus</Button>
          <Stocked>
            {(() => {
              if(status === true){
                return (
                  <Stocke>
                    <ImgON><i className="far fa-dot-circle"></i></ImgON>
                    <Description>En Stock</Description>
                  </Stocke>
                )
              } else {
                return (
                  <Stocke>
                    <ImgOFF><i className="far fa-dot-circle"></i></ImgOFF>
                    <Description>Plus En Stock</Description>
                  </Stocke>
                )
              }
            })()}
          </Stocked>
        </BoxContent>
      </Box>
    );
  }
}

const Box = styled.div`
  margin: 15px;
  padding: 15px;
  max-width: 350px;
  height: 100%;
  border-radius: 5px;
  background: #fff;
  border: 4px solid #8a00ff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  transition: .4s;

  &:hover {
    transform: translateY(15px);
    transition: .4s;
  }
`

const Paragraph = styled.p`
  margin-bottom: 25px;
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 4px;
    top: -6px;
    left: 0;
    background: #a5a5a5;
    border-radius: 10px;
    position: absolute;
  }
`

const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Stocked = styled.div`

`
const Stocke = styled.div`
  display: flex;
`

const ImgON = styled.p`
  color: #36bd41;
`

const ImgOFF = styled.p`
  color: #ff2222;
`

const Description = styled.h5`
  margin-left: 8px;
`

export default Shop;