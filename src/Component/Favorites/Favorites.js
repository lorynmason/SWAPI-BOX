import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Favorites = ({ favorites, toggleFavorites }) => {
  let cards
  if (favorites.length > 0) {
    cards = favorites.map((favorite) => {
      let favoriteID = 'no'
      const infoValue = Object.values(favorite.info).map((fvInfo) => {
        return (
          <p key={favorite.info.Name}>{fvInfo}</p>
        )
      })
      if(favorite.favorite === true) {
        favoriteID = 'favorite-card'
      }
      return (
        <div className="character-card card"  id={favoriteID} key={favorite.id}>
          <button className="favorite-btn" type="button" onClick={() => toggleFavorites(favorite.id)}>
            <i className="fas fa-jedi" />
          </button>
          <div className="info">
            <p>
              {infoValue}
            </p>
          </div>
        </div>
      )
    })
  } else {
    cards = (
      <div className="yoda-card card">
        <h1>selected favorites you have not</h1>
      </div>
    )
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
