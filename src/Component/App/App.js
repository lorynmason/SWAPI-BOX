import React, { Component } from 'react'
import '../styles/main.scss'
import * as API from '../../apiCalls'
import * as Cleaner from '../../cleaner'
import Splash from '../Splash/Splash'
import Header from '../Header/Header'
import Characters from '../Characters'
import Vehicles from '../Vehicles/Vehicles'
import Planets from '../Planets/Planets'
import Favorites from '../Favorites'
import Home from '../Home/Home'
import { Route, NavLink, Switch } from 'react-router-dom'

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

  toggleFavorites = (cardId) => {
    const { activePage, characters, vehicles, planets } = this.state
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
    this.setFavorites(newFavorite, cardId)
  }

  setFavorites = (newFavorite, cardId) => {
    const { favorites } = this.state
    if(newFavorite && !favorites.includes(newFavorite)){
      this.setState({favorites: [...this.state.favorites, newFavorite]})
    } else {
      const newState = favorites.filter((favorite) => {
      return favorite.id !== cardId
      })
      this.setState({favorites: newState})
    }
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
    if (activePage === 'splash') {
      return (
        <Splash exitSplash={this.exitSplash} films={films} />
      )
    }
    return(
      <div className="App">
        <div className="Header-section">
          <Header/>
          <div className="nav">
            <NavLink to='/characters'  className='nav-link' onClick={() => this.changePage('characters')}>Characters</NavLink>
            <NavLink to='/planets' className='nav-link' onClick={() => this.changePage('planets')}>Planets</NavLink>
            <NavLink to='/vehicles' className='nav-link' onClick={() => this.changePage('vehicles')}>Vehicles</NavLink>
            <NavLink to='/favorites' className='nav-link' onClick={() => this.changePage('favorites')}>Favorites {favorites.length}</NavLink>
          </div>
          <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path='/characters' component={() => <Characters characters={characters} toggleFavorites={this.toggleFavorites} />} 
            />
            <Route path='/planets' component={() => <Planets planets={planets} toggleFavorites={this.toggleFavorites} />}
            />
            <Route path='/vehicles' component={() => <Vehicles vehicles={vehicles} toggleFavorites={this.toggleFavorites} />}
            />
            <Route path='/favorites' component={() => <Favorites favorites={favorites} activePage={this.activePage} toggleFavorites={this.toggleFavorites} />}
            /> 
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
