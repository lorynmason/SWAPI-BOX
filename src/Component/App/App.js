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
      characters: [],
      vehicles: []
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
    const { characters, activePage, vehicles } = this.state;
    if(activePage === 'characters' && characters.length === 0) {
      const  characterData= await API.fetchCharacters()
      const characters = await API.fetchNestedInfo(characterData)
      this.setState({characters})
    }
    if(activePage === 'vehicles' && vehicles.length === 0) {
      const vehicleData = await API.fetchVehicles()
      const vehicles = Cleaner.cleanVehiclesData(vehicleData)
      this.setState({vehicles})
    }
    
  }

  exitSplash = () => {
    this.setState({
      splash: false,
      activePage: 'home'
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
          <CardContainer  activePage={this.state.activePage}              characters={this.state.characters}
                          vehicles={this.state.vehicles}/>
        </div>
      )
    }
  }
}

export default App;
