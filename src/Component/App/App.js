import React, { Component } from 'react'
import '../styles/main.scss'
import * as API from '../../apiCalls'
import * as Cleaner from '../../cleaner'
import Nav from '../Nav/Nav'
import Splash from '../Splash/Splash'
import Header from '../Header/Header'
import Characters from '../Characters'
import Vehicles from '../Vehicles'
import Planets from '../Planets'
import Favorites from '../Favorites'

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
      localStorageKeys: ['characters', 'planets', 'vehicles', 'favorites', 'films']
    }
  }

  async componentDidMount() {
    const { localStorageKeys, films } = this.state
    this.getLocalStorage(localStorageKeys)
    if (films.length === 0) {
      const filmsData = await API.fetchScroll()
      const films = Cleaner.cleanFilmsData(filmsData)
      this.setState({ films }, this.addLocalStorage(films))
    }
  }

  async componentDidUpdate() {
    const { characters, activePage, vehicles, planets } = this.state
    if (activePage === 'characters' && characters.length === 0) {
      this.setCharacterData()
    }
    if (activePage === 'vehicles' && vehicles.length === 0) {
      this.setVehicleData()
    }
    if (activePage === 'planets' && planets.length === 0) {
      this.setPlanetData()
    }
  }

  exitSplash = () => {
    this.setState({
      activePage: 'home'
    })
  }

  setCharacterData = async () => {
    const characterData = await API.fetchCharacters()
    const characterData2 = await API.fetchCharactersHomeWorld(characterData)
    const characterData3 = await API.fetchCharactersSpecies(characterData2)
    const characters = await Cleaner.cleanCharacterData(characterData3)
    this.setState({ characters }, this.addLocalStorage(characters))
  }

  setVehicleData = async () => {
    const vehicleData = await API.fetchVehicles()
    const vehicles = Cleaner.cleanVehiclesData(vehicleData)
    this.setState({ vehicles }, this.addLocalStorage(vehicles))
  }

  setPlanetData = async () => {
    const planetData = await API.fetchPlanets()
    const uncleanPlanets = await API.fetchNestedInfoPlanets(planetData)
    const planets = Cleaner.cleanPlanetData(uncleanPlanets)
    this.setState({ planets }, this.addLocalStorage(planets))
  }

  changePage = (str) => {
    this.setState({
      activePage: str
    })
  }

  addFavorites = (cardId) => {
    const { activePage, characters, vehicles, planets, favorites } = this.state
    let newFavorite
    if (activePage === 'characters') {
      newFavorite = characters.find(character => character.id === cardId)
    }
    if (activePage === 'vehicles') {
      newFavorite = vehicles.find(vehicle => vehicle.id === cardId)
    }
    if (activePage === 'planets') {
      newFavorite = planets.find(planet => planet.id === cardId)
    }
    if(!favorites.includes(newFavorite)){
      this.setState({favorites: [...this.state.favorites, newFavorite]})
    }
  }

  removeFavorites = (cardId) => {
    console.log(cardId)
  }

  addLocalStorage = (data) => {
    const { activePage } = this.state
    const dataJson = JSON.stringify(data)
    localStorage.setItem(`${activePage}`, dataJson)
  }

  getLocalStorage = (keyNames) => {
    return keyNames.map((keyName) => {
      const retrievedData = localStorage.getItem(keyName)
      const parsedData = JSON.parse(retrievedData)
      if (parsedData) {
        this.setState({ [keyName]: parsedData })
      }
    })
  }

  render() {
    const { activePage, films, favorites, characters, vehicles, planets } = this.state
    switch (activePage) {
      case 'splash':
        return (
          <Splash exitSplash={this.exitSplash} films={films} />
        )

      case 'home':
        return (
          <div className="App">
            <Header />
            <Nav
              favorites={favorites}
              changePage={this.changePage}
            />
          </div>
        )

      case 'characters':
        return (
          <div className="App">
            <Header />
            <Nav
              favorites={favorites}
              changePage={this.changePage}
            />
            <Characters
              characters={characters}
              addFavorites={this.addFavorites}
            />    
          </div>
        )

      case 'vehicles':
        return (
          <div className="App">
            <Header />
            <Nav
              favorites={favorites}
              changePage={this.changePage}
            />
            <Vehicles
              vehicles={vehicles}
              addFavorites={this.addFavorites}
            />
          </div>
        )

      case 'planets':
        return (
          <div className="App">
            <Header />
            <Nav
              favorites={favorites}
              changePage={this.changePage}
            />
            <Planets
              planets={planets}
              addFavorites={this.addFavorites}
            />
          </div>
        )
      case 'favorites':
        return (
          <div className="App">
            <Header />
            <Nav
              favorites={favorites}
              changePage={this.changePage}
            />
            <Favorites
              favorites={favorites}
              removeFavorites={this.removeFavorites}
              activePage={this.activePage}
              addFavorites={this.addFavorites}
            />
          </div>
          )
    }
  }
}

export default App
