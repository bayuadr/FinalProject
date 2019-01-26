import React from 'react';
import '../App.css';
import ListMovie from './ListMovie'

class Container extends  React.Component{
     
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-l2 col-md-12 col-lg-12'>
                            <div className="judul">
                                <h3>New Movie</h3>
                            </div>
                            <ListMovie/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container
