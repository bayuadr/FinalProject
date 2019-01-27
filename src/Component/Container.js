import React from 'react';
import '../App.css';
import ListMovie from './ListMovie'
import Title from '../Atom/Title'

class Container extends  React.Component{
     
    render(){
        const {req_data,title} = this.props
        if (req_data == 'New_Movie'){
            return(
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-l2 col-md-12 col-lg-12'>
                                <div className="judul">
                                    <Title value={title} style={'Judul'}/>
                                </div>
                                <ListMovie req ={req_data}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-l2 col-md-12 col-lg-12'>
                                <div className="judul_all">
                                    <Title value={title} style={'Judul'}/>
                                </div>
                                <ListMovie req ={req_data}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       
    }
}

export default Container
