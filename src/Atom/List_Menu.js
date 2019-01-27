import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import TabContainer from './Link_Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

class List_Menu extends React.Component {
 
constructor(props) {    
    super(props);    
    this.state = {    
      text :"",    
    }   
    this.handleChange = this.handleChange.bind(this)
 
}  

handleChange(event) {
  this.setState({text: event.target.value});
}
  render(){
    console.log(this.state.text)
  return (
      
    <div>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor : '#1b1b1b'}}>
          <div className='container'>
            <div className='row'>
                <div class='col-sm-2 col-md-2 col-lg-2'>
                    <img style={{width:'155px',height:'75px'}} src='https://hacktiv8.com/img/logo-01.png__vzu2vhp2VRX%2Bewg7J0bPlaA0f4f1c19c0064d527c72d44cfe007a08'/>
                </div>

                <div class='col-sm-6 col-md-6 col-lg-6'>
                    <TabContainer />
                </div>
                
              
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                      <div className='row' style={{marginTop:'20px'}}>
                        <div className='col-sm-1 col-md-1 col-lg-1'>
                        <Link to={`/Search/${this.state.text}`} style={{color:'white',textDecoration:'none'}}>
                            <SearchIcon />
                          </Link>  
                        </div>
                        <div className='col-sm-8 col-md-8 col-lg-8'>
                            <TextField style={{backgroundColor:'white'}}  onChange={this.handleChange} />
                        </div>
                        
                      </div>
                        
                    </div>
              </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  );
  }
}


export default List_Menu;
