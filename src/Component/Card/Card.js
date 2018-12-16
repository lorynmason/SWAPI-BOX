import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Card = ({ card, toggleFavorites, favorites }) => {
  const stats = Object.keys(card).map(key => {
    if (key === 'id') {
      return (
        <h3>{card[key]}</h3>
      )
    }
    return (
      <p>{key}: {card[key]}</p>
    )
  })
  let favoriteID = ''
  if(favorites.includes(card.id)) {
    favoriteID = 'favorite-card'
  }
  return (
    <div className="card" key={card.id} id={favoriteID}>
      <button className="favorite-btn"  type="button" onClick={() => toggleFavorites(card.id)}>
        <i className="fas fa-jedi" />
      </button>
      <div className="info">
        {stats}
      </div>
    </div>
  )
}

export default Card