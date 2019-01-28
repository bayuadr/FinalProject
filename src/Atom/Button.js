import Button from '@material-ui/core/Button';
import React from 'react';
import SimpleDialogWrapped from './Dialog'
  
  
  class SimpleDialogDemo extends React.Component {
    state = {
      open: false,
    };
  
    handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };
  
    handleClose = value => {
      this.setState({ selectedValue: value, open: false });
    };
  
    render() {
      return (
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Click here to login
          </Button>
          <SimpleDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.open}
            onClose={this.handleClose}
          />
        </div>
      );
    }
  }
  
  export default  SimpleDialogDemo