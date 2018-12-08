import React from 'react';
import '../styles/main.scss';
import PropTypes from 'prop-types';

const Splash = ({exitSplash, films}) => {
  const randomNum = Math.floor(Math.random() * Math.floor(6))
  const film = films[randomNum]
  console.log(film)
  if(film) {
    return (
      <section className='background'>
            <div className="fade">
              <div className="logo">
                <img alt='StarWars logo'
                    onClick={() => exitSplash()} 
                    src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png" title="click to enter site"/> 
              </div>
              </div>
              <div className="crawl">
                {film.text}
              <p>{film.title}</p>
              <p>{film.date}</p>
              </div>
              <div className="button-div">
              <button onClick={() => exitSplash()}className='enter-btn'>
              ENTER </button>
              </div>
            </section>
    )
  } else {
    
    return (
      <section className='background'>
        <div className="fade">
        </div>
      </section>
    )
  }
}

Splash.propTypes = {
exitSplash: PropTypes.func.isRequired,
films: PropTypes.array.isRequired
}

export default Splash;
