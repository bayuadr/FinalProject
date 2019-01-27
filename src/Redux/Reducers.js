const variable = {
    data: [],
    loading : true,
    comment : [],
}

export const reducers = (state = {...variable},action) =>{
    switch(action.type){
        case 'ReqData':
        return({
            ...state,
            loading:false,
            data:action.payload
        })
        default :
        return state
    }
}