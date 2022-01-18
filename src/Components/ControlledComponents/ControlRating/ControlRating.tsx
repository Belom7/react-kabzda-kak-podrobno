import React from "react";
import {ControlStar} from "./ControlStar/ControlStar";

type PropsType = {
    rating: 0 | 1 | 2 | 3 | 4 | 5
}

export const ControlRating: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ControlStar n={props.rating > 0}/>
            <ControlStar n={props.rating > 1}/>
            <ControlStar n={props.rating > 2}/>
            <ControlStar n={props.rating > 3}/>
            <ControlStar n={props.rating > 4}/>
        </div>
    )
}