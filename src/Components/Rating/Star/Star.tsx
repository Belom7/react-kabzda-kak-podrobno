import React from "react";

type PropsType={
    n:boolean
}

export const Star:React.FC<PropsType>=(props)=>{
        if(props.n){
            return <span><b>Star</b></span>
        }else {
            return <span>Star</span>
        }
}