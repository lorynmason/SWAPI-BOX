import React, { Component } from 'react';
import '../styles/main.scss';
import { fetchScroll } from '../../helper.js';
import Nav from '../Nav/Nav.js';
import Splash from '../Splash/Splash.js';
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      favorites: [],
      activePage: '',
      splash: true
    }
  }
  async componentDidMount() {
    const films = await fetchScroll()
    this.setState({
      films
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
        <Splash exitSplash={this.exitSplash} films={this.state.films}/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header></header>
          <Nav favorites={this.state.favorites} 
               changePage={this.changePage}/>
          <CardContainer />
        </div>
      )
    }
  }
}

export default App;
