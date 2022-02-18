import React from "react";

type PropsType={
    name:string
    callBack:()=>void
}

export const ControlAccordionTitle:React.FC<PropsType>=(props)=>{
    const onClick = () => props.callBack()

    return(
        <div>
            <h3 onClick={onClick}>{props.name}</h3>
        </div>
    )
}