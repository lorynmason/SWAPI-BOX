import React from 'react'
import PropTypes from 'prop-types'

const Nav = ( {favorites, changePage} ) => {

  return (
    <nav className="nav">
      <button className="nav-link" onClick={() => changePage('characters')} >Characters</button>
      <button className="nav-link" onClick={() => changePage('planets')}>Planets</button>
      <button className="nav-link" onClick={() => changePage('vehicles')}>Vehicles</button>
      <button className="nav-link" onClick={() => changePage('favorites')}>Favorites: {favorites.length}</button>
    </nav>
  )
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Nav