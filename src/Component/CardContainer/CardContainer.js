import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({ appState, toggleFavorites, location }) => {
  const makeCards = (card) => {
    return <Card card={card} key={card.id} toggleFavorites={toggleFavorites} favorites={appState.favorites} />
  }
  let cards;
  if (location.location.pathname === '/characters') {
    cards = appState.characters.map(card => makeCards(card))
  }
  if (location.location.pathname === '/planets') {
    cards = appState.planets.map(card => makeCards(card))
  }
  if (location.location.pathname === '/vehicles') {
    cards = appState.vehicles.map(card => makeCards(card))
  }
  if (location.location.pathname === '/favorites') {
    cards = appState.favorites.reduce((arr, favorite) => {
      const favoriteCharacters = appState.characters.filter(character => character.id === favorite)
      const favoritePlanets = appState.planets.filter(planet => planet.id === favorite)
      const favoriteVehicles = appState.vehicles.filter(vehicle => vehicle.id === favorite)
      return [...arr, ...favoriteVehicles, ...favoriteCharacters, ...favoritePlanets]
    },[]).map(card => makeCards(card)) 
    if (appState.favorites.length === 0) {
      cards = (
        <div className="yoda-card card">
          <h1>selected favorites you have not</h1>
        </div>
      )
    }
  }
  return (
    <section className="cardContainer">
      {cards}
    </section>
  )
}

CardContainer.propTypes = {
  toggleFavorites: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
}

export default CardContainer
