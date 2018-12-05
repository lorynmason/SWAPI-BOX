import React from 'react';
import '../styles/main.scss';
import PropTypes from 'prop-types';

const PageContainer = ({activePage}) => {

  switch(activePage){
    case 'Home':
      return (
        <div className="home">
          <header className="home-header">
            <Nav 
            favorites={this.state.favorites} changePage={this.changePage}/>
            <div className="logo">
              <img alt='StarWars logo'                       
                    src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"/>
            </div>
          </header>
        </div>
      );
    case 'Characters':
    return (
      <div className="App">
        <CharatersPage />
      </div>
    );  
}

  
  
  