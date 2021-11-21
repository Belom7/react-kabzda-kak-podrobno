import React from "react";


type PropsType={
    value:boolean
}

export const NotControlledOnOff:React.FC<PropsType>=(props)=>{

    const styleOn ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.value? 'green' : 'white'
    }
    const styleOff ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: !props.value? 'red' : 'white'
    }
    const styleIndicator ={
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value? 'green' : 'red'
    }

    return(
        <div>
            <div style={styleOn}>On</div>
            <div style={styleOff}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    )
}