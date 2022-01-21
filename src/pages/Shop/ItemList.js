import React, { Component } from 'react';
import { DataComputer } from '../../data/DataAll';
import styled from 'styled-components';
import Shop from './Shop';
import Footer from '../../components/Footer';
import { TitleShop, TitleContent } from '../../components/Components';

class ItemList extends Component {
  state = {
    data: DataComputer,
    radios: [
      {id: 1, value: "Tout"},
      {id: 2, value: "En Stock"},
      {id: 3, value: "Plus En Stock"}
    ],
    selectedRadio: "Tout"
  }

  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({selectedRadio: radio})
  }

  render() {
    let {data, radios, selectedRadio} = this.state

    return (
      <>
        <TitleContent>
          <TitleShop>La Boutique</TitleShop>
        </TitleContent>
        <BtnRadio>
          {
            radios.map((radio) => {

              return (
              <BtnContent key={radio.id}>
                <Input
                  type="radio" 
                  name="radio" 
                  checked={radio.value === selectedRadio} 
                  value={radio.value} 
                  id={radio.value} 
                  onChange={this.handleRadio}>
                </Input>
                <Label htmlFor={radio.value}>{radio.value}</Label>
              </BtnContent>
              )
            })
          }
        </BtnRadio>
        <Item>
        {
          data.map(item => {

            return (
              <Shop key={item.id} item={item}/>
            )
          })
        }
      </Item>
      <Footer />
      </>
    );
  }
}

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const BtnRadio = styled.ul`

`

const BtnContent = styled.li`

`

const Input = styled.input`

`

const Label = styled.label`

`

export default ItemList;