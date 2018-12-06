import React from 'react'
import '../styles/main.scss';
import PropTypes from 'prop-types'

const Nav = ( {favorites, changePage} ) => {

  return (
    <nav>
      <button onClick={() => changePage('characters')} >Characters</button>
      <button onClick={() => changePage('planets')}>Planets</button>
      <button onClick={() => changePage('vehicles')}>Vehicles</button>
      <button>Favorites: {favorites.length}</button>
    </nav>
  )
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Nav