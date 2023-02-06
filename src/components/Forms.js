import React, {useState} from 'react'


export default function Forms(props) {
  const textclick = ()=>{
    let arr = text.split(" ");
    for (var i = 0; i < arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(" ");
    setText(str2);

  }
  const txtclick = ()=>{
    let arr = text.split(" ");
    for (var i = 0; i < arr.length; i++){
      arr[i] = arr[i].toLowerCase();
    }
    let str2 = arr.join(" ");
    setText(str2);

  }
  const txtclear = ()=>{
    let newtxt = "";
    setText(newtxt);
  }
  const textchange = (event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }
  const detectemail = ()=>{
    let arr = text.split(" ");
    const emailarr = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i].includes("@") || arr[i].includes(".com") || arr[i].includes(".net") || arr[i].includes("gmail") || arr[i].includes("yahoo")){
        emailarr.push(arr[i]);
      }
    }
    let str2 = emailarr.join(" ");
    setText(str2);
  }
  const [mystyle,setStyle] = useState({
    color:'white',
    backgroundColor: 'black'
  })
  const [buttonText,setbuttonText] = useState("Enable Dark Mode")
  const changeMode = ()=>{
    if(mystyle.backgroundColor==='black'){
      setStyle({
        color:'black',
        backgroundColor:'white'
      })
      setbuttonText("Enable Dark Mode")
    }
    else{
      setStyle({
        color:'white',
        backgroundColor:'black',
        border:'white-solid'
      })
      setbuttonText("Enable Light Mode")
    }
  }
  const [text, setText] = useState('enter text here');
  return (
    <>
      <div>
      {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
        <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled/>
        <label className="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled/>
        <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
      </div> */}

        <h2 className="text-center">{props.title}</h2>
        <div className="container" >
          <div className="mb-3">
          <label htmlFor="textbox" className="form-label">{props.formtitle}</label>
          <textarea value={text} onChange={textchange} className="form-control" id="textbox" rows="5"></textarea>
          </div>
          <button type="submit" onClick={textclick}className="btn btn-success text-center mx-1">First word captalize</button>
          <button type="submit" onClick={txtclick}className="btn btn-success text-center mx-1">convert to lowercase</button>
          <button type="submit" onClick={txtclear}className="btn btn-success text-center mx-1">Clear text area</button>
          <button type="submit" onClick={detectemail}className="btn btn-success text-center mx-1">Extract all emails</button>
        </div>
      </div>
    <div className="conting text-center" >
      <h1> Text Counter</h1>
      <p>Character typed - {text.length}</p>
      <p>Words typed - {text.split(" ").length}</p>
    </div>
    </>
  )
}