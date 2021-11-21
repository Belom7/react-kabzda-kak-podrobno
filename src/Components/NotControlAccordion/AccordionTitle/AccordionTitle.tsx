import React from "react";

type PropsType={
    name:string
}

export const AccordionTitle:React.FC<PropsType>=(props)=>{
    return(
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}