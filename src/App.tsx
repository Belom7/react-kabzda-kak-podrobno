import React from 'react';
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {AppTitle} from "./Components/AppTitle/AppTitle";


function App(props:any) {
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <Rating/>
            <AppTitle title={'New title is component'}/>
            <Accordion name={'Menu'} collapsed={false}/>
            <Accordion name={'Menu2'} collapsed={true}/>
            <Rating rating={0}/>
            <Rating rating={1}/>
            <Rating rating={2}/>
            <Rating rating={3}/>
            <Rating rating={4}/>
            <Rating rating={5}/>
        </div>

    );
}

export default App;
