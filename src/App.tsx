import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";


const App = () => {

    const sides = [
        {id: 1, name: 'Profile'},
        {id: 2, name: 'Messages'},
        {id: 3, name: 'News'},
        {id: 4, name: 'Music'},
        {id: 5, name: 'Settings'}
    ];

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav side={sides}/>
            <Profile/>
        </div>
    );
}

export default App;




