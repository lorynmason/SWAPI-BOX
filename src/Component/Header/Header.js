import React from 'react'
import '../styles/main.scss';
import PropTypes from 'prop-types'

const Header = () => {

  return (
    <header>
    <div className="header-logo">
    <img alt='StarWars logo'
           src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"/> 
    </div>
    </header>
  )
}

Header.propTypes = {
  favorites: PropTypes.array.isRequired
}

export default Header