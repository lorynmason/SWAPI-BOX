import React from 'react'
import '../styles/main.scss';
import PropTypes from 'prop-types'
import Card from '../Card/Card.js'

const CardContainer = ({activePage, characters}) => {
  const cards = characters.map( character => {
    return (<Card character={character}/>)
  })
  console.log(cards)
  return (
  <section className="cardContainer">
    {cards}
  </section>
  )
}

CardContainer.propTypes = {
  
}

export default CardContainer