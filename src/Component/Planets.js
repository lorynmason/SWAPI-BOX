import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Planets = ({ planets, toggleFavorites }) => {
  const cards = planets.map((planet) => {
    let resident
    if (planet.residents.length === 0) {
      resident = 'NO KNOWN OCCUPANTS'
    } else {
      resident = planet.residents.map((resident) => {
        return resident + ' | '
      })
    }
    return (
      <div className="planet-card card">
        <button className="favorite-btn" type="button" onClick={() => toggleFavorites(planet.id)}>
          <i className="fas fa-jedi" />
        </button>
        <h1>
          {planet.planet}
        </h1>
        <p>
          {`Climate: `}
          {planet.climate}
        </p>
        <p>
          {`Population: `}
          {planet.population}
        </p>
        <p>
          {`Residents: `}
          {resident}
        </p>
        <p>
          {`Terrain: `}
          {planet.terrain}
        </p>
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
