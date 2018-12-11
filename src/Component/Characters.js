import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Characters = ({ characters, toggleFavorites, activePage, favorites }) => {
  const cards = characters.map((character) => {
    const infoValue = Object.values(character.info).map((chInfo) => {
      return(
        <p>{chInfo}</p>
        )
    })

    return (
      <div className="character-card card">
        <button className="favorite-btn" type="button" onClick={() => toggleFavorites(character.id)}>
          <i className="fas fa-jedi" />
        </button>
       <div className='info'>
          <p>
            {infoValue}
          </p>
        </div>
      </div>
    )
  })


  return (
    <section className="cardContainer">
      {cards}
    </section>
  )
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
  addFavorites: PropTypes.func.isRequired
}

export default Characters
