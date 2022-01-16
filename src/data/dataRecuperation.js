import React, { Component } from 'react';
import { DataComputer } from './DataComputer'

class dataRecuperation extends Component {
  state = {
    data = DataComputer
  }

  render() {
    let {data} = this.state

    return (
      <div>
        {
          data.map(item => {

            // return (
            //   <News key={item.id} item={item}/>
            // )
          })
        }
      </div>
    );
  }
}

export default dataRecuperation;