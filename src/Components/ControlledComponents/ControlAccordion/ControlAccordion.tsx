import React, {useState} from "react";
import {ControlAccordionTitle} from "./ControlAccordionTitle/ControlAccordionTitle";
import {ControlAccordionBody} from "./ControlAccordionBody/ControlAccordionBody";

export type ControlAccordionPropsType = {
    name: string
    collapsed: boolean
}

export type ItemsType = {
    id:string
    name:string
}

const items = [
    {id: '1', name: 'Maks'},
    {id: '2', name: 'Ivan'},
    {id: '3', name: 'Jeka'},
    {id: '4', name: 'Andrey'},
]


const onClick = (id:string) => console.log(`был нажат элемент с ${id} id`)

export const ControlAccordion: React.FC<ControlAccordionPropsType> = (props) => {
    const [collapsed, setCollapsed]=useState(true)

    const CallBackHandler = () => {setCollapsed(!collapsed)}

    return (
        <div>
            <ControlAccordionTitle name={props.name} callBack={CallBackHandler}/>
            {props.collapsed && <ControlAccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}