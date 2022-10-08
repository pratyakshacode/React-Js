import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './Components/About';


function App() {
  const[mode, setMode] = useState('light');

   const darkMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(0 24 51)';
        
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';

      }
   }
  return (
    
    <Router>
      

<Navbar mode={mode} darkmode = {darkMode}/>
<div className='container'>
<Routes>

          <Route exact path="/about"  element={<About mode={mode}/>}>
          
          </Route>
          
          <Route path="/" element={<Textform mode={mode}/>}>
          
          </Route>
        </Routes>
    </div>
    
    </Router>
  );
}

export default App;
