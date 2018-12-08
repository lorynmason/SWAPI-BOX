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
    const { characters, activePage, vehicles, planets } = this.state;
    if(activePage === 'characters' && characters.length === 0) {
      const characterData = await API.fetchCharacters()
      const characterData2 = await API.fetchCharactersHomeWorld(characterData)
      const characterData3 = await API.fetchCharactersSpecies(characterData2)
      const characters = await Cleaner.cleanCharacterData(characterData3)
      this.setState({characters}, this.addLocalStorage(characters))
    }
    if(activePage === 'vehicles' && vehicles.length === 0) {
      const vehicleData = await API.fetchVehicles()
      const vehicles = Cleaner.cleanVehiclesData(vehicleData)
      this.setState({vehicles}, this.addLocalStorage(vehicles))
    }
    if(activePage === 'planets' && planets.length === 0) {
      const planetData = await API.fetchPlanets()
      const uncleanPlanets = await API.fetchNestedInfoPlanets(planetData)
      const planets = Cleaner.cleanPlanetData(uncleanPlanets)
      this.setState({planets}, this.addLocalStorage(planets))
    }
  }

  exitSplash = () => {
    this.setState({
      splash: false,
      activePage: 'home'
    })
  }

  changePage = (str) => {
    this.setState({
      activePage: str
    })
  }

  addFavorites = (card) => {
    console.log(card)
  }

  addLocalStorage = (data) => {
    data = JSON.stringify(data);
    localStorage.setItem(`${this.state.activePage}`, data)
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
            <Characters characters={this.state.characters}
                        addFavorites={this.addFavorites}/>
                             
          </div>
        )
        
        case 'vehicles':
        return (
          <div className="App">
            <Header/>
            <Nav favorites={this.state.favorites} 
                  changePage={this.changePage}/>
            <Vehicles vehicles={this.state.vehicles}
                      addFavorites={this.addFavorites}/>              
          </div>
        )

        case 'planets':
        return (
          <div className="App">
            <Header/>
            <Nav favorites={this.state.favorites} 
                  changePage={this.changePage}/>  
            <Planets planets={this.state.planets}
                      addFavorites={this.addFavorites}/>         
          </div>
        )

      }
    }
  }
}

export default App;
