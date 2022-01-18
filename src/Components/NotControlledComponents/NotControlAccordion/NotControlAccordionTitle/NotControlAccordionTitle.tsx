import React from "react";

type PropsType={
    name:string
    callBack:()=>void
}

export const NotControlAccordionTitle:React.FC<PropsType>=(props)=>{

    const onClickHandler = () => {
        props.callBack()
    }

    return(
        <div>
            <h3 onClick={onClickHandler}>{props.name}</h3>
        </div>
    )
}