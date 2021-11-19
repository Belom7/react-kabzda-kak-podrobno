import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type PropsType={
    name:string
    collapsed:boolean
}

export const Accordion:React.FC<PropsType> = (props) =>{
    if(props.collapsed){
        return (
            <div>
                <AccordionTitle name={props.name}/>
            </div>
        )
    }else{
        return(
            <div>
                <AccordionTitle name={props.name}/>
                <AccordionBody/>
            </div>
        )
    }

}