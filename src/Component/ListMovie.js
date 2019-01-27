import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Title from '../Atom/Title'
import {Fetch_New_Movie} from '../Redux/Action'
import {bindActionCreators} from 'redux'
import LinearProgress from '@material-ui/core/LinearProgress';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import background from '../Asset/background_atas.jpg'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


class ListMovie extends React.Component{
           
    componentDidMount(){
        this.props.Fetch_New_Movie()
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
      };

    render(){
       
        const {req,data,loading,index} = this.props
    
        if(loading){
          return (
          <LinearProgress style={{marginBottom:'50px;'}} /> 
       
          )
        }
        if(req === 'New_Movie'){
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
                                                        <Title value={res.title} style={'Judul_film'}/>
                                                        <Title value={res.release_date} style={'Tanggal_Film'}/>
                                                    </div>
    
                                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                                        <CircularProgress variant="static"   value={res.vote_average * 100} />
                                                        &nbsp;&nbsp;<b>{res.vote_average}</b>
                                                    </div>
                                                </div>
    
                                                <img  src={'http://image.tmdb.org/t/p/w300//'+res.poster_path} />
                                                <br/><br/>
                                                <Link to={`/Detail/${i}`} style={{color:'white',textDecoration:'none'}}>
                                                    <Button color="primary" variant="contained" size="small" >
                                                    <Icon style={{width:'35px'}}>send</Icon>
                                                         View Detail
                                                    </Button>    
                                                </Link>              
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
        else if(req == 'All_Movie'){
            return(
                <div className='container'>
                    <div className='row'>
                        {
                            data.map( (res,i) =>{
                                
                                return(
                                    <div className='col-sm-4 col-md-4 col-lg-4'>
                                            <div className='List_movie' >
                                                <div className='row'>
                                                    <div className="col-sm-8 col-md-8 col-lg-8">
                                                        <Title value={res.title} style={'Judul_film'}/>
                                                        <Title value={res.release_date} style={'Tanggal_Film'}/>
                                                    </div>
    
                                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                                        <CircularProgress variant="static"   value={res.vote_average * 100} />
                                                        &nbsp;&nbsp;<b>{res.vote_average}</b>
                                                    </div>
                                                </div>
    
                                                <img  src={'http://image.tmdb.org/t/p/w300//'+res.poster_path} />
                                                <br/><br/>
                                                <Link to={`/Detail/${i}`} style={{color:'white',textDecoration:'none'}}>
                                                    <Button color="primary" variant="contained" size="small" >
                                                    <Icon style={{width:'35px'}}>send</Icon>
                                                         View Detail
                                                    </Button>  
                                                </Link>                
                                            </div>
                                    </div>
                                    )
                                 
                            })
                        }
                    </div>
                </div>
                
            )
        }
        else if(req == 'Seacrh_Movie'){
            return(
                <div className='container'>
                    <div className='row'>
                        {
                            data.map( (res,i) =>{
                                if(res.title == index){
                                    return(
                                        <div className='col-sm-4 col-md-4 col-lg-4'>
                                                <div className='List_movie' >
                                                    <div className='row'>
                                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                                            <Title value={res.title} style={'Judul_film'}/>
                                                            <Title value={res.release_date} style={'Tanggal_Film'}/>
                                                        </div>
        
                                                        <div className="col-sm-4 col-md-4 col-lg-4">
                                                            <CircularProgress variant="static"   value={res.vote_average * 100} />
                                                            &nbsp;&nbsp;<b>{res.vote_average}</b>
                                                        </div>
                                                    </div>
        
                                                    <img  src={'http://image.tmdb.org/t/p/w300//'+res.poster_path} />
                                                    <br/><br/>
                                                    <Link to={`/Detail/${i}`} style={{color:'white',textDecoration:'none'}}>
                                                        <Button color="primary" variant="contained" size="small" >
                                                        <Icon style={{width:'35px'}}>send</Icon>
                                                             View Detail
                                                        </Button>  
                                                    </Link>                
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
        else if(req == 'Detail_Movie'){
            return(
                <div className='container'>
                    <div className='row'>
                        {
                            data.map( (res,i) =>{
                                if(i== index){
                                return(
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <div className='List_movie_detail' >
                                            <div className='row'>
                                                <div className='col-lg-4 col-md-4 col-lg-4'>
                                                    <div className='row'>
                                                        <div className="col-sm-9 col-md-9 col-lg-9">
                                                            <Title value={res.title} style={'Judul_film'}/>
                                                            <Title value={res.release_date} style={'Tanggal_Film'}/>
                                                        </div>
            
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <CircularProgress variant="static"   value={res.vote_average * 100} />
                                                            &nbsp;&nbsp;<b>{res.vote_average}</b>
                                                        </div>
                                                    </div>
                                                        <img  src={'http://image.tmdb.org/t/p/w300//'+res.poster_path} />  
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-lg-6'>
                                                <Title value={'Overview'} style={'Judul_film'}/>
                                                <p>{res.overview}</p>
                                                </div>   
                                            </div>      
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
}

const mapStateToProps = (state) => ({
    data : state.data,
    loading : state.loading
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    Fetch_New_Movie
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ListMovie)