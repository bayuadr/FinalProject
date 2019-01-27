import React from 'react'
import '../App.css';
import Menu from "../Component/Menu"
import Container from "../Component/Container"
import Footer from "../Component/Footer"

class Detail extends React.Component{
    
    render(){
        const {index} = this.props.match.params
        return (
            <div>
              <Menu/>
              <Container req_data={'Detail_Movie'} index={index} title={'Detail Movie'}/>
              <Footer/>
            </div>
          );
    }
}

export default Detail