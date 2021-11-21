import React from 'react';
import {Rating} from "./Components/Rating/Rating";
import {NotControlAccordion} from "./Components/NotControlAccordion/Accordion";
import {AppTitle} from "./Components/AppTitle/AppTitle";
import {NotControlledOnOff} from "./Components/OnOff/NotControlledOnOff/NotControlledOnOff";
import {ControlledOnOff} from "./Components/OnOff/ControlledOnOff/ControlledOnOff";
import {ControlAccordion} from "./Components/ControlAccordion/Accordion";


function App(props: any) {
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <AppTitle title={'New title is component'}/>
            <NotControlAccordion name={'Not Control Menu'} collapsed={false}/>
            <NotControlAccordion name={'Not Control Menu2'} collapsed={true}/>
            <Rating rating={0}/>
            <Rating rating={1}/>
            <Rating rating={2}/>
            <Rating rating={3}/>
            <Rating rating={4}/>
            <Rating rating={5}/>
                <h3>Not control</h3>
            <NotControlledOnOff value={true}/>
            <NotControlledOnOff value={false}/>
            <NotControlledOnOff value={false}/>
            <NotControlledOnOff value={false}/>
            <NotControlledOnOff value={false}/>
            <NotControlledOnOff value={true}/>
                <h3>Control</h3>
            <ControlledOnOff/>
            <ControlledOnOff/>
            <ControlledOnOff/>
            <ControlledOnOff/>
            <ControlAccordion name={'Control Menu 1'}/>
            <ControlAccordion name={'Control Menu 2'}/>
            <ControlAccordion name={'Control Menu 3'}/>
        </div>
    );
}

export default App;
