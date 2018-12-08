import React from 'react'
import './styles/main.scss'
import PropTypes from 'prop-types'

const Vehicles = ({ vehicles }) => {
  const cards = vehicles.map((vehicle)=> {
    return (
    <div className="vehicle-card card">
      <h1>{vehicle.Name}</h1>
      <p>Model: 
        {vehicle.Model}
      </p>
      <p>Class:
         {vehicle.Class}
      </p>
      <p>Passengers:
         {vehicle.Passengers}
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