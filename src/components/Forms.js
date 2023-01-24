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
  const textchange = (event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }

  const [text, setText] = useState('enter text here');
  return (
    <>
      <div>
        <h2 className="text-center">{props.title}</h2>
        <div className="container">
          <div className="mb-3">
          <label htmlFor="textbox" className="form-label">{props.formtitle}</label>
          <textarea value={text} onChange={textchange} className="form-control" id="textbox" rows="5"></textarea>
          </div>
          <button type="submit" onClick={textclick}className="btn btn-success text-center mx-1">First word captalize</button>
          <button type="submit" onClick={txtclick}className="btn btn-success text-center mx-1">convert to lowercase</button>
        </div>
      </div>
    <div className="conting text-center">
      <h1> Text Counter</h1>
      <p>Character typed - {text.length}</p>
      <p>Words typed - {text.split(" ").length}</p>
    </div>
    </>
  )
}