import React from 'react'

const Title = (props) => {
    if (props.style === 'Judul'){
        return(
            <h3>{props.value}</h3>
            )
    }
    else if(props.style === 'Judul_film'){
        return <h5>{props.value}</h5>
    }
    else if(props.style === 'Tanggal_Film'){
        return <h6>{props.value}</h6>
    }
   
}

export default Title