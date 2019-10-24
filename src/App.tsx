import React from 'react';
import logo from './logo.svg';
import './App.css';
import {InputComponent} from "./InputComponent";
import {Nav} from "./components/Nav";
import MainComponent from "./MainComponent";

const App: React.FC = () => {
  return (
      <div className="App">
        <Nav />
        <MainComponent/>
      </div>
  );
};

export default App;
