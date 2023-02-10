// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Forms from  './components/Forms';
import About from './pages/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  
  const[mode,setmode]=useState('light');
  const changeMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      document.getElementById('textbox').style.backgroundColor='#003366';
      document.getElementById('textbox').style.color='#fff';
      document.title='Text Editor - Dark Mode';
      // setInterval(()=>{ document.title='LIVE SALE IS ON';}, 2000);
      // setInterval(()=>{ document.title='Text Editor - Dark Mode';}, 10000);

    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      document.getElementById('textbox').style.backgroundColor='white';
      document.getElementById('textbox').style.color='#000';
      document.title='Text Editor';
    }
  }
  return (
 < >
 <Router>
  <Navbar title="Word styler" navitem1="Home" navitem2="other features" mode={mode} changeMode={changeMode} />
  <Routes>
    <Route path='/' element={<Forms/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
  
</Router>
 </>
  );
}

export default App;
