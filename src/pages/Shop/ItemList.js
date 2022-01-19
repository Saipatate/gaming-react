import React, { Component } from 'react';
import { DataComputer } from '../../data/DataAll';
import styled from 'styled-components';
import Shop from './Shop';
import Footer from '../../components/Footer';
import { TitleShop, TitleContent } from '../../components/Components';

class ItemList extends Component {
  state = {
    data: DataComputer
  }

  render() {
    let {data} = this.state

    return (
      <>
        <TitleContent>
          <TitleShop>La Boutique</TitleShop>
        </TitleContent>
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

export default ItemList;