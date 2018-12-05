import React from 'react'
import '../styles/main.scss';
import PropTypes from 'prop-types'

const Splash = ({exitSplash, films}) => {
  const randomMovie = Math.floor(Math.random() * Math.floor(6));
    const text = films.map((film) => {
      return film.text
    })[randomMovie]
  return (
    <section className='background'>
          <div className="fade">
            <div className="logo">
            <img alt='StarWars logo' src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"/> 
            </div>
            </div>
            <div className="crawl">
            {text}
            </div>
            <button onClick={() => exitSplash()}className='enter-btn'>
            Enter </button>
          </section>
  )
}

Splash.propTypes = {

}

export default Splash;
