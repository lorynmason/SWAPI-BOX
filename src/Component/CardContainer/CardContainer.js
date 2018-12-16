import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({ appState, toggleFavorites }) => {
  let cards;
  if (appState.activePage === 'characters') {
    cards = appState.characters.map(card => <Card card={card} toggleFavorites={toggleFavorites}/>)
  }
  if (appState.activePage === 'planets') {
    cards = appState.planets.map(card => <Card card={card} toggleFavorites={toggleFavorites}/>)
  }
  if (appState.activePage === 'vehicles') {
    cards = appState.vehicles.map(card => <Card card={card} toggleFavorites={toggleFavorites}/>)
  }
  return (
    <section className="cardContainer">
      {cards}
    </section>
  )
}

export default CardContainer