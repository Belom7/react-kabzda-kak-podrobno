import React from "react";
import {ControlAccordionTitle} from "./ControlAccordionTitle/ControlAccordionTitle";
import {ControlAccordionBody} from "./ControlAccordionBody/ControlAccordionBody";

type PropsType = {
    name: string
    collapsed: boolean
}

export const ControlAccordion: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ControlAccordionTitle name={props.name}/>
            {props.collapsed && <ControlAccordionBody/>}
        </div>
    )
}

// <NotControlAccordion name={'Menu'} collapsed={false}/> не скрывать
// <NotControlAccordion name={'Menu2'} collapsed={true}/> скрывать