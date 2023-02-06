// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Forms from  './components/Forms';
import { useState } from 'react';
function App() {
  const[mode,setmode]=useState('light');
  const changeMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      document.getElementById('textbox').style.backgroundColor='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      document.getElementById('textbox').style.backgroundColor='white';
    }
  }
  return (
 < >
  <Navbar title="Word styler" navitem1="Home" navitem2="other features" mode={mode} changeMode={changeMode} />
  <Forms title="Style your words" formtitle="Use diffrent styling"/>
 </>
  );
}

export default App;
