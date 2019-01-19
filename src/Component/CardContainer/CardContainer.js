import React from 'react'
import '../styles/main.scss'
// import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({ appState, toggleFavorites, favorites }) => {
  let cards;
  if (appState.activePage === 'characters') {
    cards = appState.characters.map(card => <Card card={card} key={card.id} toggleFavorites={toggleFavorites} favorites={favorites} />)
  }
  if (appState.activePage === 'planets') {
    cards = appState.planets.map(card => <Card card={card} key={card.id} toggleFavorites={toggleFavorites} favorites={favorites}/>)
  }
  if (appState.activePage === 'vehicles') {
    cards = appState.vehicles.map(card => <Card card={card} key={card.id} toggleFavorites={toggleFavorites} favorites={favorites}/>)
  }
  if (appState.activePage === 'favorites') {
    cards = appState.favorites.reduce((arr, favorite) => {
      const favoriteCharacters = appState.characters.filter(character => character.id === favorite)
      const favoritePlanets = appState.planets.filter(planet => planet.id === favorite)
      const favoriteVehicles = appState.vehicles.filter(vehicle => vehicle.id === favorite)
      return [...arr, ...favoriteVehicles, ...favoriteCharacters, ...favoritePlanets]
    },[]).map(card => <Card card={card} toggleFavorites={toggleFavorites} key={card.id} favorites={favorites}/>) 
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

export default CardContainer