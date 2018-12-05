import React, { Component } from 'react';
import '../styles/main.scss';
import { fetchScroll } from '../../helper.js';
import Nav from '../Nav/Nav.js';
import Splash from '../Splash/Splash.js';
import CardContainer from '../CardContainer/CardContainer.js'
import Header from '../Header/Header.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      favorites: [],
      activePage: '',
      splash: true
    }
  }
  async componentDidMount() {
    const film = await fetchScroll()
    this.setState({
      film
    })
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
          <CardContainer />
        </div>
      )
    }
  }
}

export default App;
