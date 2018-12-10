import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Vehicles = ({ vehicles, toggleFavorites }) => {
  const cards = vehicles.map((vehicle) => {
    const infoValue = Object.values(vehicle.info).map((chInfo) => {
      return(
        <p>{chInfo}</p>
        )
    })
    const infoKey = Object.keys(vehicle.info).map((chInfo) => {
      return(
        <p>{chInfo}</p>
        )
    })

    return (
      <div className="vehicle-card card">
        <button className="favorite-btn" type="button" onClick={() => toggleFavorites(vehicle.id)}>
          <i className="fas fa-jedi" />
        </button>
        <h1>{vehicle.name}</h1>
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

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default Vehicles
