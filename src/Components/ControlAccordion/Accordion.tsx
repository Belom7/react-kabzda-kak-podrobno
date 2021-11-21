import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type PropsType = {
    name: string
}

export const ControlAccordion: React.FC<PropsType> = (props) => {

    let [collapsed, setCollapsed]=useState(true)

    return (
        <div>
            <AccordionTitle name={props.name}/>
            <button onClick={()=>setCollapsed(!collapsed)}>Collapsed</button>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

// <NotControlAccordion name={'Menu'} collapsed={false}/> не скрывать
// <NotControlAccordion name={'Menu2'} collapsed={true}/> скрывать