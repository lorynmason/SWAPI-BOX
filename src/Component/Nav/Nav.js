import React from 'react'
import '../styles/main.scss'
import PropTypes from 'prop-types'

const Nav = ({ favorites, changePage }) => {
  return (
    <nav>
      <button type="button" onClick={() => changePage('characters')}>Characters</button>
      <button type="button" onClick={() => changePage('planets')}>Planets</button>
      <button type="button" onClick={() => changePage('vehicles')}>Vehicles</button>
      <button type="button" onClick={() => changePage('favorites')}>
        Favorites:
        {favorites.length}
      </button>
    </nav>
  )
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Nav
