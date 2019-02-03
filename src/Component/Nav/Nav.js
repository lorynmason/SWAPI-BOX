import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Nav = ( {favorites, changePage} ) => {
  return (
    <nav className="nav">
      <NavLink 
        to="/characters" 
        className="nav-link"
        id="characters-link" 
        onClick={() => changePage('characters')}>
          Characters
        </NavLink>
      <NavLink 
        to="/planets" 
        className="nav-link"
        id="planets-link" 
        onClick={() => changePage('planets')}>
        Planets
      </NavLink>
      <NavLink
        to="/vehicles"
        className="nav-link"
        id="vehicles-link" 
        onClick={() => changePage('vehicles')}>
        Vehicles
      </NavLink>
      <NavLink 
        to="/favorites" 
        className="nav-link"
        id="favorites-link" 
        onClick={() => changePage('favorites')}>
        Favorites: {favorites.length}
      </NavLink>
    </nav>
  )
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Nav
