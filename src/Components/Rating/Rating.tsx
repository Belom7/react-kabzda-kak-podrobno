import React from "react";
import {Star} from "./Star/Star";

type PropsType = {
    rating: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Star n={props.rating > 0}/>
            <Star n={props.rating > 1}/>
            <Star n={props.rating > 2}/>
            <Star n={props.rating > 3}/>
            <Star n={props.rating > 4}/>
        </div>
    )
}