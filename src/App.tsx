import React from 'react';
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {AppTitle} from "./Components/AppTitle/AppTitle";


function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    );
}

export default App;
