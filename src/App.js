import React from 'react';
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Drizzle from './pages/Drizzle';
import Rain from './pages/Rain';
import Snow from './pages/Snow';
import Thunder from './pages/Thunderstorm';
import Hyst from './pages/Hyst';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path='/' exact element={<Home />} />

        <Route path='/Drizzle' element={<Drizzle/>} />
        <Route path='/Thunderstorm' element={<Thunder/>} />
        <Route path='/Rain' element={<Rain/>} />
        <Route path='/Snow' element={<Snow/>} />
        <Route path='/Hyst' element={<Hyst/>} />
    </Routes>
    </Router>
);
}
  
export default App;