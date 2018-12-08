import React from 'react'
import './styles/main.scss';
import PropTypes from 'prop-types'

const Characters = ({characters , addFavorites}) => {
  const cards = characters.map( character => {
    return (<div className="character-card card">
      <button className="favorite-btn"
              onClick={()=> addFavorites(character.id)}><i className="fas fa-jedi"></i></button>
      <h1>{character.name}</h1>
      <p> Species: {character.species}</p>
      <p> Homeworld: {character.homeworld}</p>
      <p> Population: {character.population}</p>
   </div>)
  })
 
  return (
  <section className="cardContainer">
    {cards}
  </section>
  )
}

Characters.propTypes = {
  
}

export default Characters