import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Favorites = ({ favorites, toggleFavorites }) => {
  let cards;
  if(favorites.length > 0) {
      cards = favorites.map((favorite) => { 
        return(
          <div className="character-card card" key={favorite.id}>
            <button className="favorite-btn" type="button" onClick={() => toggleFavorites(favorite.id)}>
              <i className="fas fa-jedi" />
            </button>
            <h1>{favorite.name}</h1>
            <p>{favorite.homeworld}</p>
            <p>{favorite.model}</p>
            <p>{favorite.terrain}</p>
            <p>{favorite.species}</p>
            <p>{favorite.class}</p>
            <p>{favorite.passengers}</p>
            <p>{favorite.climate}</p>
            <p>{favorite.population}</p>
            <p>{favorite.residents}</p>
          </div>
        )
      })
  } else {
    cards = <div className="yoda-card card">
    <h1>selected favorites you have not</h1>
    </div>
  }
  
  return (
    <section className="cardContainer">
    {cards}
  </section>
)

}

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default Favorites
