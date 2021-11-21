import React, {useState} from "react";


export const ControlledOnOff=()=>{

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

    return(
        <div>
            <div style={styleOn} onClick={()=>setValue(true)}>On</div>
            <div style={styleOff} onClick={()=>setValue(false)}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    )
}