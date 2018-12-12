import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Planets = ({ planets, toggleFavorites }) => {
  const cards = planets.map((planet, index) => {
    const infoValue = Object.values(planet.info).map((plInfo, index) => {
      return (
        <p key={`${plInfo[0]}-${index}`}>{plInfo}</p>
      )
    })

    return (
      <div className="planet-card card" key={`${planet.id}-${index}`}>
        <button className="favorite-btn" type="button" onClick={() => toggleFavorites(planet.id)}>
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

  return (
    <section className="cardContainer">
      {cards}
    </section>
  )
}

Planets.propTypes = {
  planets: PropTypes.array.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default Planets
