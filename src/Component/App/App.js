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
      films: [],
      favorites: [],
      activePage: 'splash',
      characters: [],
      vehicles: [],
      planets: [],
      localStorageKeys:['characters', 'planets', 'vehicles', 'favorites', 'films']
    }
  }

  async componentDidMount() {
    this.getLocalStorage(this.state.localStorageKeys)
    if(this.state.films.length === 0) {
      const filmsData = await API.fetchScroll()
      const films = Cleaner.cleanFilmsData(filmsData)
      this.setState({films}, this.addLocalStorage(films)) 
    }
  }

  async componentDidUpdate() {
    const { characters, activePage, vehicles, planets } = this.state;
    if(activePage === 'characters' && characters.length === 0) {
      this.setCharacterData();
    }
    if(activePage === 'vehicles' && vehicles.length === 0) {
      this.setVehicleData();
    }
    if(activePage === 'planets' && planets.length === 0) {
      this.setPlanetData();
    }
  }

  exitSplash = () => {
    this.setState({
      splash: false,
      activePage: 'home'
    })
  }

  setCharacterData = async () => {
    const characterData = await API.fetchCharacters()
    const characterData2 = await API.fetchCharactersHomeWorld(characterData)
    const characterData3 = await API.fetchCharactersSpecies(characterData2)
    const characters = await Cleaner.cleanCharacterData(characterData3)
    this.setState({characters}, this.addLocalStorage(characters))
  }

  setVehicleData = async () => {
    const vehicleData = await API.fetchVehicles()
    const vehicles = Cleaner.cleanVehiclesData(vehicleData)
    this.setState({vehicles}, this.addLocalStorage(vehicles))
  }

  setPlanetData = async () => {
    const planetData = await API.fetchPlanets()
    const uncleanPlanets = await API.fetchNestedInfoPlanets(planetData)
    const planets = Cleaner.cleanPlanetData(uncleanPlanets)
    this.setState({planets}, this.addLocalStorage(planets))
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

  getLocalStorage = (keyNames) => {
    const parsedData = keyNames.map(keyName =>{
      const retrievedData = localStorage.getItem(keyName);
      const parsedData = JSON.parse(retrievedData)
      if(parsedData){
        this.setState({[keyName]: parsedData})}
    })
  }
  
  render() {

    switch(this.state.activePage) {

      case 'splash':
      return (
      <div className="splash">
      <Splash exitSplash={this.exitSplash} films={this.state.films}/>
      </div>
    );

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

export default App;
