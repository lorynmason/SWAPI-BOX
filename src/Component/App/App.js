import React, { Component } from 'react';
// import './styles/main.scss';
import { fetchScroll } from '../../../src/helper.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }

  async componentDidMount() {
    const films = await fetchScroll()
    this.setState({
      films
    })
  }
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
