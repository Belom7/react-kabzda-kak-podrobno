import React from 'react';
import {ControlRating} from "./Components/ControlledComponents/ControlRating/ControlRating";
import {AppTitle} from "./Components/ControlledComponents/AppTitle/AppTitle";
import {ControlOnOff} from "./Components/ControlledComponents/ControlOnOff/ControlOnOff";
import {NotControlOnOff} from "./Components/NotControlledComponents/NotControlOnOff/NotControlOnOff";
import {ControlAccordion} from "./Components/ControlledComponents/ControlAccordion/ControlAccordion";
import {NotControlAccordion} from "./Components/NotControlledComponents/NotControlAccordion/NotControlAccordion";
import {NotControlRating} from "./Components/NotControlledComponents/NotControlRating/NotControlRating";


function App(props: any) {
    return (
        <div>
            <AppTitle title={'This is Controlled Components'}/>

            <h3>Control</h3>

            <ControlRating rating={0}/>
            <ControlRating rating={1}/>
            <ControlRating rating={2}/>
            <ControlRating rating={3}/>
            <ControlRating rating={4}/>
            <ControlRating rating={5}/>

            <ControlOnOff value={true}/>
            <ControlOnOff value={false}/>
            <ControlOnOff value={false}/>
            <ControlOnOff value={false}/>
            <ControlOnOff value={false}/>
            <ControlOnOff value={true}/>

            <ControlAccordion name={'Control Menu'} collapsed={false}/>
            <ControlAccordion name={'Control Menu2'} collapsed={true}/>


            <AppTitle title={'This is Not Controlled Components'}/>

            <h3>Not control</h3>

            <NotControlRating/>
            <NotControlRating/>
            <NotControlRating/>
            <NotControlRating/>
            <NotControlRating/>

            <NotControlOnOff/>
            <NotControlOnOff/>
            <NotControlOnOff/>
            <NotControlOnOff/>

            <NotControlAccordion name={'Not Control Menu 1'}/>
            <NotControlAccordion name={'Not Control Menu 2'}/>
            <NotControlAccordion name={'Not Control Menu 3'}/>
        </div>
    );
}

export default App;
