import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Vehicles = ({ vehicles, toggleFavorites }) => {
  const cards = vehicles.map((vehicle, index) => {
    const infoValue = Object.values(vehicle.info).map((vhInfo, index) => {
      return (
        <p key={`${vhInfo[0]}-${index}`}>{vhInfo}</p>
      )
    })

    return (
      <div className="vehicle-card card" key={`${vehicle.id}-${index}`}>
        <button className="favorite-btn" type="button" onClick={() => toggleFavorites(vehicle.id)}>
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

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default Vehicles
