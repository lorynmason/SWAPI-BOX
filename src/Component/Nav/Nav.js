import React from 'react'
import '../styles/main.scss';
import PropTypes from 'prop-types'

const Nav = ( {favorites, changePage} ) => {

  return (
    <nav>
      <button onClick={() => changePage('Characters')} >Characters</button>
      <button onClick={() => changePage('Planets')}>Planets</button>
      <button onClick={() => changePage('Vehicles')}>Vehicles</button>
      <button>Favorites: {favorites.length}</button>
    </nav>
  )
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired
}

export default Nav