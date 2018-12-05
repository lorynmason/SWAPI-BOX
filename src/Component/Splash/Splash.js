import React from 'react';
import '../styles/main.scss';
import PropTypes from 'prop-types';

const Splash = ({exitSplash, film}) => {
  return (
    <section className='background'>
          <div className="fade">
            <div className="logo">
            <img alt='StarWars logo'
                 onClick={() => exitSplash()} 
                 src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"/> 
            </div>
            </div>
            <div className="crawl">
            {film.text}
            <p>{film.title}</p>
            <p>{film.date}</p>
            </div>
            <button onClick={() => exitSplash()}className='enter-btn'>
            ENTER </button>
          </section>
  )
}

Splash.propTypes = {

}

export default Splash;
