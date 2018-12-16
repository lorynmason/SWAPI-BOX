import React, { Component } from 'react'
import '../styles/main.scss'
import { Route, NavLink, Switch } from 'react-router-dom'
import * as API from '../../apiCalls'
import * as Cleaner from '../../cleaner'
import Splash from '../Splash/Splash'
import Header from '../Header/Header'
import Characters from '../Characters/Characters'
import Vehicles from '../Vehicles/Vehicles'
import Planets from '../Planets/Planets'
import Favorites from '../Favorites/Favorites'
import Home from '../Home/Home'
import Nav from '../Nav'
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      splash: [],
      favorites: [],
      activePage: 'splash',
      characters: [],
      vehicles: [],
      planets: [],
      localStorageKeys: ['characters', 'planets', 'vehicles', 'favorites', 'splash']
    }
  }

  async componentDidMount() {
    const { localStorageKeys, splash } = this.state
    await this.getLocalStorage(localStorageKeys)
    if (splash.length === 0) {
      const filmsData = await API.fetchData('https://swapi.co/api/films')
      const splash = Cleaner.cleanFilmsData(filmsData)
      this.setState({ splash }, this.addLocalStorage(splash))
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

  setCharacterData = async () => {
    const characterData = await API.fetchData('https://swapi.co/api/people')
    const characters = await API.getMoreCharacterData(characterData.results)
    this.setState({ characters }, this.addLocalStorage(characters))
  }

  setVehicleData = async () => {
    const vehicleData = await API.fetchData('https://swapi.co/api/vehicles')
    const vehicles = Cleaner.cleanVehiclesData(vehicleData)
    this.setState({ vehicles }, this.addLocalStorage(vehicles))
  }

  setPlanetData = async () => {
    const planetData = await API.fetchData('https://swapi.co/api/planets')
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
    const { favorites } = this.state
    const newFavorites = [...favorites, cardId]
    if (!favorites.includes(cardId)) {
      this.setState({ favorites: [...favorites, cardId] },this.handleFavoritesStorage(newFavorites))
    } else {
      const newState = favorites.filter((favorite) => {
        return favorite !== cardId
      })
      this.setState({ favorites: newState }, this.handleFavoritesStorage(newState))
    }
  }

  addLocalStorage = (data) => {
    const { activePage } = this.state
    const dataJson = JSON.stringify(data)
    localStorage.setItem(`${activePage}`, dataJson)
  }

  handleFavoritesStorage = (newFavorites) => {
    const dataJson = JSON.stringify(newFavorites)
    localStorage.setItem('favorites', dataJson)
  }

  getLocalStorage = (keyNames) => {
    return keyNames.map(async (keyName) => {
      const retrievedData = await localStorage.getItem(keyName)
      const parsedData = await JSON.parse(retrievedData)
      if (parsedData) {
        this.setState({ [keyName]: parsedData })
      }
    })
  }

  render() {
    const { activePage, splash, favorites } = this.state
    if (activePage === 'splash') {
      return (
        <Splash changePage={this.changePage} splash={splash} />
      )
    }
    return (
      <div className="App">
        <Header />
        <Nav favorites={favorites} changePage={this.changePage} />
        <CardContainer appState={this.state} toggleFavorites={this.toggleFavorites} favorites={favorites} />
      </div>
    )
    
    // return (
    //   <div className="App">
    //     <div className="Header-section">
    //       <Header />
    //       <div className="nav">
    //         <NavLink to="/characters" className="nav-link" onClick={() => this.changePage('characters')}>Characters</NavLink>
    //         <NavLink to="/planets" className="nav-link" onClick={() => this.changePage('planets')}>Planets</NavLink>
    //         <NavLink to="/vehicles" className="nav-link" onClick={() => this.changePage('vehicles')}>Vehicles</NavLink>
    //         <NavLink to="/favorites" className="nav-link" onClick={() => this.changePage('favorites')}>
    //         Favorites {favorites.length}
    //         </NavLink>
    //       </div>
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route
    //           path="/characters"
    //           component={() => <Characters characters={characters} toggleFavorites={this.toggleFavorites} />}
    //         />
    //         <Route
    //           path="/planets"
    //           component={() => <Planets planets={planets} toggleFavorites={this.toggleFavorites} />}
    //         />
    //         <Route
    //           path="/vehicles"
    //           component={() => <Vehicles vehicles={vehicles} toggleFavorites={this.toggleFavorites} />}
    //         />
    //         <Route
    //           path="/favorites"
    //           component={() => <Favorites favorites={favorites} activePage={this.activePage} toggleFavorites={this.toggleFavorites} />}
    //         />
    //       </Switch>
    //     </div>
    //   </div>
    // )
  }
}

export default App
