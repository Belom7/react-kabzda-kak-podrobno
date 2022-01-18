import React from "react";

type PropsType={
    n:boolean
    callBack:(value:number)=>void
    value:number
}

export const NotControlStar:React.FC<PropsType>=(props)=>{

    const onClickHandler = () =>{
        props.callBack(props.value)
    }

    return <span onClick={onClickHandler}> { props.n? <b>Star</b>: <>Star</>} </span>

}