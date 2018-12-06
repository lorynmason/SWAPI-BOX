import React, { Component } from 'react';
import '../styles/main.scss';
import * as API from '../../apiCalls.js';
import * as Cleaner from '../../cleaner.js';
import Nav from '../Nav/Nav.js';
import Splash from '../Splash/Splash.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Header from '../Header/Header.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      favorites: [],
      activePage: '',
      splash: true,
      characters: []
    }
  }
  async componentDidMount() {
    const filmsData = await API.fetchScroll()
    const film = Cleaner.cleanFilmsData(filmsData)
    this.setState({
      film
    })
  }

  async componentDidUpdate() {
    if(this.state.activePage === 'Characters' && this.state.characters.length === 0) {
      const  characterData= await API.fetchCharacters()
      const characters = await API.fetchNestedInfo(characterData)
      this.setState({characters})
    }
  }

  exitSplash = () => {
    this.setState({
      splash: false,
      activePage: 'Home'
    })
  }

  changePage=(str)=> {
    this.setState({
      activePage: str
    })
  }
  
  render() {
    if(this.state.splash) {
      return (
        <div className="splash">
        <Splash exitSplash={this.exitSplash} film={this.state.film}/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header/>
          <Nav favorites={this.state.favorites} 
               changePage={this.changePage}/>
          <CardContainer activePage={this.state.activePage}                     characters={this.state.characters}/>
        </div>
      )
    }
  }
}

export default App;
