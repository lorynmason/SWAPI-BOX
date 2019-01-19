import React, { Component } from 'react'
import '../styles/main.scss'
import * as API from '../../apiCalls'
import * as Cleaner from '../../cleaner'
import Splash from '../Splash/Splash'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import CardContainer from '../CardContainer/CardContainer'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'

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
        <Switch>
          <Route exact path="/" component={Home} />
            <Route
              path="/characters"
              render={(location) => <CardContainer appState={this.state} toggleFavorites={this.toggleFavorites} favorites={favorites} location={location}/>}
            />
            <Route
              path="/planets"
              render={(location) => <CardContainer appState={this.state} toggleFavorites={this.toggleFavorites} favorites={favorites} location={location}/>}
            />
            <Route
              path="/vehicles"
              render={(location) => <CardContainer appState={this.state} toggleFavorites={this.toggleFavorites} favorites={favorites} location={location}/>}
            />
            <Route
              path="/favorites"
              render={(location) => <CardContainer appState={this.state} toggleFavorites={this.toggleFavorites} favorites={favorites} location={location}/>}
            />
          </Switch>
      </div>
    )
  }
}

export default App
