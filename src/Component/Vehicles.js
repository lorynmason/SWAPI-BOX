import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Vehicles = ({ vehicles, addFavorites }) => {
  const cards = vehicles.map((vehicle) => {
    return (
      <div className="vehicle-card card">
        <button className="favorite-btn" type="button" onClick={() => addFavorites(vehicle.id)}>
          <i className="fas fa-jedi" />
        </button>
        <h1>{vehicle.name}</h1>
        <p>
          {`Model: `}
          {vehicle.model}
        </p>
        <p>
          {`Class: `}
          {vehicle.class}
        </p>
        <p>
          {`Passengers: `}
          {vehicle.passengers}
        </p>
      </div>)
  })

  return (
    <section className="cardContainer">
      {cards}
    </section>
  )
}

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default Vehicles
