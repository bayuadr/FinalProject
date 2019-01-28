import React from 'react'
import '../App.css';
import Menu from "../Component/Menu"
import Container from "../Component/Container"
import Footer from "../Component/Footer"

class Explore extends React.Component{
    
    render(){
        return (
            <div>
              <Menu value={this.props.history}/>
              <Container req_data={'All_Movie'} title={'All Movie'}/>
              <Footer/>
            </div>
          );
    }
}

export default Explore