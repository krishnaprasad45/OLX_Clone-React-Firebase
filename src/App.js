import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the import change
import Home from './Pages/Home';
import Signup from  './Pages/Signup'
import Login from  './Pages/Login'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/login' element={<Login/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
