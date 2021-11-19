import React from "react";
import {Star} from "./Star/Star";

type PropsType = {
    rating?: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: React.FC<PropsType> = (props) => {

    if (props.rating === 1) {
        return (
            <div>
                <Star n={true}/>
                <Star n={false}/>
                <Star n={false}/>
                <Star n={false}/>
                <Star n={false}/>
            </div>
        )
    }
    if (props.rating === 2) {
        return (
            <div>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={false}/>
                <Star n={false}/>
                <Star n={false}/>
            </div>
        )
    }
    if (props.rating === 3) {
        return (
            <div>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={false}/>
                <Star n={false}/>
            </div>
        )
    }
    if (props.rating === 4) {
        return (
            <div>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={false}/>
            </div>
        )
    }
    if (props.rating === 5) {
        return (
            <div>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={true}/>
                <Star n={true}/>
            </div>
        )
    }
    return (
        <div>
            <Star n={false}/>
            <Star n={false}/>
            <Star n={false}/>
            <Star n={false}/>
            <Star n={false}/>
        </div>
    )
}