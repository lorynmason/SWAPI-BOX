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
       <p>{this.props.character.species}</p>
       <p>{this.props.character.homeworld}</p>
       <p>{this.props.character.population}</p>
      </div>
    )
  }
}


export default Card;