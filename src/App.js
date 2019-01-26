import React, { Component } from 'react';
import './App.css';
import Menu from "./Component/Menu"
import Container from "./Component/Container"
import Footer from "./Component/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}

export default App;
