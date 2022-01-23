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
      {id: 2, value: "PC Fixe"},
      {id: 3, value: "PC Portable"},
      {id: 4, value: "Casque"},
      {id: 5, value: "Clavier"},
      {id: 6, value: "Ecran"},
      {id: 7, value: "Souris"}
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
          data
          .filter(item => item.name.includes(selectedRadio) || item.nameAll.includes(selectedRadio))
          .map(item => {

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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`

const BtnContent = styled.li`
  margin: 15px;
`

const Input = styled.input`
  &:checked {
    color: red;
  }
`

const Label = styled.label`
  margin-left: 10px;
  font-weight: 500;
`

export default ItemList;