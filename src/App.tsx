import React from 'react';
import './App.css';
import {Nav} from "./components/Nav";
import MainComponent from "./MainComponent";

const App: React.FC = () => {
    return (
        <div className="App">
            <Nav/>
            <MainComponent/>
        </div>
    );
};

export default App;
