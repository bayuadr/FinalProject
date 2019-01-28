const variable = {
    data: [],
    loading : true,
    comment : ['Good Movie','Nice Movie','I Like It !!!!'],
    username : ''
}

export const reducers = (state = {...variable},action) =>{
    switch(action.type){
        case 'ReqData':
        return({
            ...state,
            loading:false,
            data:action.payload
        })
        case 'PushComment' :
        
        return({
            ...state,
            comment: [...state.comment, action.payload]
        })
        case 'Login' :
        return ({
            ...state,
            username : action.payload
        })
        default :
        return state
    }
}