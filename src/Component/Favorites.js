import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Favorites = ({ favorites, removeFavorite }) => {
  const cards = favorites.map((favorite) => {
    if(favorite.catagory === 'characters') {
      return (
      <div className="character-card card">
        <button className="favorite-btn" type="button" onClick={() => addFavorites(character.id)}>
          <i className="fas fa-jedi" />
        </button>
        <h1>
          {character.name}
        </h1>
        <p>
          {`Species: `}
          {character.species}
        </p>
        <p>
          {`Homeworld: `}
          {character.homeworld}
        </p>
        <p>
          {`Population: `}
          {character.population}
        </p>
      </div>
    )
    }
  })

  return(
    <section className="cardContainer">
      {cards}
    </section>
  )

}

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
  removeFavorite: propTypes.func.isRequired
}

export default Favorites
