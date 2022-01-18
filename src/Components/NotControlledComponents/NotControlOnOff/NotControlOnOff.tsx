import React, {useState} from "react";


export const NotControlOnOff=()=>{

    let [value, setValue]=useState(false)

    const styleOn ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: value? 'green' : 'white'
    }
    const styleOff ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: !value? 'red' : 'white'
    }
    const styleIndicator ={
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: value? 'green' : 'red'
    }

    const onClick = () => {setValue(true)}
    const offClick = () => {setValue(false)}

    return(
        <div>
            <div style={styleOn} onClick={onClick}>On</div>
            <div style={styleOff} onClick={offClick}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    )
}