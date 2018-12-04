import React, { Component } from 'react';
import '../styles/main.scss';
import { fetchScroll } from '../../helper.js';
import Nav from '../Nav/Nav.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }
  async componentDidMount() {
    const films = await fetchScroll()
    this.setState({
      films
    })
  }
  
  render() {
    const randomMovie = Math.floor(Math.random() * Math.floor(6));
    const text = this.state.films.map((film) => {
      return film.text
    })[randomMovie]
    
    return (
      <div className="App">
      <section className='background'>
      <div className="fade">
        <div className="logo">
        <img alt='StarWars logo' src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"/> 
        </div>
        </div>
        <div className="crawl">
        {text}
        </div>
      </section>
      </div>
    );
    // return (
    //   <div className="App">
    //     <header>
    //       <Nav />
    //       <div className="logo">
    //         <img alt='StarWars logo'                       
    //              src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"/>
    //       </div>
    //     </header>
    //   </div>
    // );

  }
}

export default App;
