import React, { Component } from 'react';
import '../App.css';
import Menu from "../Component/Menu"
import Container from "../Component/Container"
import Footer from "../Component/Footer"

class Home extends Component {
  render() {
    return (
      <div>
        <Menu value={'Home'}/>
        <Container req_data={'New_Movie'} title={'New Movie'}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
