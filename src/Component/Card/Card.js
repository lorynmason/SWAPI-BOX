import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Card = ({ card, toggleFavorites }) => {
  const stats = Object.keys(card).map(key => {
    if (key !== 'category' && key !== 'id' && key !== 'favorite') {
      let stat = card[key]
      let label =''
      if (key !== 'name') {
        label = key + ':'
      }
      if (key === 'Residents') {
        stat = card[key].join(', ')
        if (card[key].length === 0) {
          stat = 'No Known Occupants'
        }
      }
      return (
        <p>{label} {stat}</p>
      )
    }
  })
  
  return (
    <div className="card" key={card.id}>
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