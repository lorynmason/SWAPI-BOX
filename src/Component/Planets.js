import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Planets = ({ planets, toggleFavorites }) => {
  const cards = planets.map((planet) => {
    const infoValue = Object.values(planet.info).map((plInfo) => {
      let Resident
      if (planet.info.Residents.length === 0) {
        Resident = 'NO KNOWN OCCUPANTS'
      } else {
        Resident = planet.info.Residents.map((Resident) => {
          return Resident + ' | '
        })
      }
      return (
        <p>{plInfo}</p>
        )
    })
    const infoKey = Object.keys(planet.info).map((plInfo) => {
      return(
        <p>{plInfo}</p>
        )
    })
    return (
      <div className="planet-card card">
        <button className="favorite-btn" type="button" onClick={() => toggleFavorites(planet.id)}>
          <i className="fas fa-jedi" />
        </button>
        <h1>
          {planet.name}
        </h1>
        <div className='info'>
          <p>
            {infoKey}
          </p>
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
  planets: PropTypes.array.isRequired
}

export default Planets
