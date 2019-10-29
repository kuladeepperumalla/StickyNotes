import React, { Component, Fragment } from 'react';
import Nav from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Components/cardContainer";
import Terenary from "./Untit"

class App extends Component {

  render() {
    return(
      <div>
        <Nav/>
        <Cards />
        
      </div>
    )
  }
}

export default App;
