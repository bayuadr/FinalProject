import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class ListMovie extends React.Component{

    constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8df30aeef1f145a45b2e93ca728a6660&language=en-US&page=1')
        .then(res =>{
            if(res.status == '200'){

                this.setState({
                    data : res.data.results
                })
             
            }
        })
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
      };

    render(){
        const {data} = this.state

        return(
            <div className='container'>
                <div className='row'>
                    {
                        data.map( (res,i) =>{
                            if (i<=5){
                            return(
                                <div className='col-sm-4 col-md-4 col-lg-4'>
                                        <div className='List_movie' >
                                            <div className='row'>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <h5>{res.title}</h5>
                                                    <h6>{res.release_date}</h6>   
                                                </div>

                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <CircularProgress variant="static"   value={res.vote_average * 100} />
                                                    &nbsp;&nbsp;<b>{res.vote_average}</b>
                                                </div>
                                            </div>

                                            <img  src={'http://image.tmdb.org/t/p/w300//'+res.poster_path} />
                                            <br/><br/>
                                            <Button color="primary" variant="contained" size="small" >
                                            <Icon style={{width:'35px'}}>send</Icon>
                                                 View Detail
                                            </Button>                  
                                        </div>
                                </div>
                                )
                            }
                            
                            
                        })
                    }
                </div>
            </div>
            
        )
    }
}

export default ListMovie