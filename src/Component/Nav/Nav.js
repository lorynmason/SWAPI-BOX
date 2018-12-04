import React from 'react'
import '../styles/main.scss';
import PropTypes from 'prop-types'

const Nav = ( {favorites} ) => {

  return (
    <nav>
      <button>Characters</button>
      <button>Planets</button>
      <button>Vehicles</button>
      <button>Favorites: {favorites.length}</button>
  
    </nav>
  )
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired
}

export default Nav