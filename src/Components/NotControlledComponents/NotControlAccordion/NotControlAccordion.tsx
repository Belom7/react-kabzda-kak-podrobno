import React, {useState} from "react";
import {NotControlAccordionTitle} from "./NotControlAccordionTitle/NotControlAccordionTitle";
import {NotControlAccordionBody} from "./NotControlAccordionBody/NotControlAccordionBody";

type PropsType = {
    name: string
}

export const NotControlAccordion: React.FC<PropsType> = (props) => {

    const [collapsed, setCollapsed]=useState(true)

    const CallBackHandler = () => {setCollapsed(!collapsed)}

    return (
        <div>
            <NotControlAccordionTitle name={props.name} callBack={CallBackHandler}/>
            {collapsed && <NotControlAccordionBody/>}
        </div>
    )
}

// <NotControlAccordion name={'Menu'} collapsed={false}/> не скрывать
// <NotControlAccordion name={'Menu2'} collapsed={true}/> скрывать