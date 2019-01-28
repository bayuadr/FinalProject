import React from 'react'
import '../App.css';
import Menu from "../Component/Menu"
import Container from "../Component/Container"
import Footer from "../Component/Footer"

class Detail extends React.Component{
    
    render(){
        const {movie_name} = this.props.match.params
        return (
            <div>
              <Menu value={this.props.history}/>
              <Container req_data={'Seacrh_Movie'} index={movie_name} title={'Search Movie'}/>
              <Footer/>
            </div>
          );
    }
}

export default Detail