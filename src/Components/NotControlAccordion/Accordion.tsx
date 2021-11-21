import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type PropsType = {
    name: string
    collapsed: boolean
}

export const NotControlAccordion: React.FC<PropsType> = (props) => {
    return (
        <div>
            <AccordionTitle name={props.name}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

// <NotControlAccordion name={'Menu'} collapsed={false}/> не скрывать
// <NotControlAccordion name={'Menu2'} collapsed={true}/> скрывать