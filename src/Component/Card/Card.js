import React, { Component } from 'react';
import '../styles/main.scss';

class Card extends Component {
  constructor() {
    super()
    this.state= {
      favorite: false
    }
  }
  
  render() {
    return (
      <div className="card">
       <h1>
         {this.props.character.name}
       </h1>
       <p> Species: {this.props.character.species}</p>
       <p> Homeworld: {this.props.character.homeworld}</p>
       <p> Population: {this.props.character.population}</p>
      </div>
    )
  }
}


export default Card;