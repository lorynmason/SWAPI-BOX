import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Vehicles = ({ vehicles, toggleFavorites }) => {
  const cards = vehicles.map((vehicle) => {
    let favoriteID = 'no'
    const infoValue = Object.values(vehicle.info).map((vhInfo) => {
      return (
        <p>{vhInfo}</p>
      )
    })
    if(vehicle.favorite === true) {
      console.log(1)
      favoriteID = 'favorite'
    }

    return (
      <div className="vehicle-card card" id={favoriteID}>
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
