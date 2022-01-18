import React, {useState} from "react";
import {NotControlStar} from './NotControlStar/NotControlStar'


export const NotControlRating = () => {

    const[rating, setRating] = useState(0)

    const ratingHandler = (value:number) => {
        setRating(value)
    }

    return (
        <div>
            <NotControlStar n={rating > 0} value={1} callBack={ratingHandler}/>
            <NotControlStar n={rating > 1} value={2} callBack={ratingHandler}/>
            <NotControlStar n={rating > 2} value={3} callBack={ratingHandler}/>
            <NotControlStar n={rating > 3} value={4} callBack={ratingHandler}/>
            <NotControlStar n={rating > 4} value={5} callBack={ratingHandler}/>
        </div>
    )
}