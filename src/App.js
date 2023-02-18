import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import AboutBreed from './pages/aboutBreedPage';
import { Main } from './pages/mainPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path="/aboutBreed/:breedID/:img" element={ <AboutBreed /> } />
      </Routes>
    </div>
  );
 } 

export default App;
