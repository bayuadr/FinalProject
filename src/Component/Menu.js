import React from 'react';
import '../App.css';
import background from '../Asset/background_atas.jpg'

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
   
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Menu extends React.Component{
   
    render(){
        const { classes } = this.props;
        return(
            <div>
            <div className='Menu'> 
               <img src={background}/>
            </div>
            <div className="Content_Top">
                  <center><h3>Explore the movie at Hacktiv8 MovieDB.</h3></center>
                  <center>
                <Fab variant="extended" className={classes.fab} style={{width:'55%'}} size='large'>
                <NavigationIcon className={classes.extendedIcon} />
                    What are you waiting for? Let's go explore 
                </Fab>
                </center>
            </div>
            </div>
        )
    }
    
}


export default withStyles(styles)(Menu)