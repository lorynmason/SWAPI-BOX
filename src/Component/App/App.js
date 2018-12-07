import React, { Component } from 'react';
import '../styles/main.scss';
import * as API from '../../apiCalls.js';
import * as Cleaner from '../../cleaner.js';
import Nav from '../Nav/Nav.js';
import Splash from '../Splash/Splash.js';
// import CardContainer from '../CardContainer/CardContainer.js';
import Header from '../Header/Header.js';
import Characters from '../Characters.js';
import Vehicles from '../Vehicles.js';
import Planets from '../Planets.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      favorites: [],
      activePage: '',
      splash: true,
      characters: [],
      vehicles: [],
      planets: []
    }
  }
  async componentDidMount() {
    const filmsData = await API.fetchScroll()
    const film = Cleaner.cleanFilmsData(filmsData)
    this.setState({film})
  }

  async componentDidUpdate() {
    if(this.state.activePage === 'characters' && this.state.characters.length === 0) {
      const characterData= await API.fetchCharacters()
      const characters = await API.fetchNestedInfo(characterData)
      this.setState({characters})
    }
    if(this.state.activePage === 'vehicles' && this.state.vehicles.length === 0) {
      const vehicleData = await API.fetchVehicles()
      const vehicles = Cleaner.cleanVehiclesData(vehicleData)
      this.setState({vehicles})
    }
    if(this.state.activePage === 'planets' && this.state.planets.length === 0) {
      const planetData = await API.fetchPlanets()
      const uncleanPlanets = await API.fetchNestedInfoPlanets(planetData)
      const planets = Cleaner.cleanPlanetData(uncleanPlanets)
      this.setState({planets})
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
      // return (
      //   <div className="App">
      //     <Header/>
      //     <Nav favorites={this.state.favorites} 
      //          changePage={this.changePage}/>
      //     <CardContainer  activePage={this.state.activePage}              characters={this.state.characters}
      //                     vehicles={this.state.vehicles}/>
      //   </div>
      // )
      switch(this.state.activePage) {
        case 'home':
        return (
          <div className="App">
            <Header/>
            <Nav favorites={this.state.favorites} 
                  changePage={this.changePage}/>
          </div>
        )

        case 'characters':
        return (
          <div className="App">
            <Header/>
            <Nav favorites={this.state.favorites} 
                  changePage={this.changePage}/>
            <Characters characters={this.state.characters}/>
                             
          </div>
        )
        
        case 'vehicles':
        return (
          <div className="App">
            <Header/>
            <Nav favorites={this.state.favorites} 
                  changePage={this.changePage}/>
            <Vehicles vehicles={this.state.vehicles}/>              
          </div>
        )

        case 'planets':
        return (
          <div className="App">
            <Header/>
            <Nav favorites={this.state.favorites} 
                  changePage={this.changePage}/>  
            <Planets planets={this.state.planets}/>         
          </div>
        )

      }
    }
  }
}

export default App;
