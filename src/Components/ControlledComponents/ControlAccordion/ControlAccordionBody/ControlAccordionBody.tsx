import React from "react";
import {ItemsType} from "../ControlAccordion";

type ControlAccordionBodyPropsType = {
    items:ItemsType[]
    onClick:(id:string) => void
}

export const ControlAccordionBody=(props:ControlAccordionBodyPropsType)=>{

    const onClickHandler = (id:string) => {props.onClick(id)}

    return(
        <div>
            <ul>
                {props.items.map(i => <li key={i.id} onClick={()=>onClickHandler(i.id)}>{i.name}</li>)}
            </ul>
        </div>
    )
}