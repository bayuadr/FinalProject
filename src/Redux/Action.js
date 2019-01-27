import axios from 'axios'

export const Fetch_New_Movie = () => {
    return dispatch =>{
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8df30aeef1f145a45b2e93ca728a6660&language=en-US&page=1')
        .then(
            res => {
                if(res.status === 200){
                    
                    return res.data.results
                }
                else
                {
                    return 'Not Found'    
                }         
            }
        )
        .then( 
            data=>{
                dispatch(ReqMovie(data))
            }
        )
        .catch(
            error=>{
                dispatch(reqUsersError(error))
            }
        )
    }
}

export const ReqMovie = (payload) =>({
    type:'ReqData',
    payload
})

export const reqUsersError= (payload)=>({
    type:'Fetc_eror',
    payload
})