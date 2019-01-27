import React, { Component } from 'react';
import './App.css';
import Home from './Page/Home';
import Explore from './Page/Explore'
import Detail from './Page/Detail'
import Search from './Page/Search'

import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './Redux/Index'

class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
      <BrowserRouter>
         <Switch> 
            <Route exact path="/" component={Home}/>
            <Route exact path="/Explore" component={Explore}/>  
            <Route exact path ="/Detail/:index" component={Detail}/>
            <Route exact path ="/Search/:movie_name" component={Search}/>
          </Switch>   
      </BrowserRouter>
      </Provider>
      </div>
    );
  }
}

export default App;
