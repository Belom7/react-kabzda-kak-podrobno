import React from "react";

type PropsType = {
    title: string
}

export const AppTitle: React.FC<PropsType> = (props) => {
    return (
        <>{props.title}</>
    )
}