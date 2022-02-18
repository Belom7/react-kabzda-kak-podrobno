import React from 'react';
import {ItemsSelectType} from "../../App";

type SelectPropsType = {
    name:ItemsSelectType[]
}

export const Select = (props:SelectPropsType) => {
    return (
        <div>
            <select>
                {props.name.map(i => <option key={i.id}>{i.town}</option>)}
            </select>
        </div>
    );
};
