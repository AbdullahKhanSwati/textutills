import React,{useState} from 'react'

export default function Textfield(props) {
    const [text ,setText] = useState("");
    let myTxt = "";
    var a = 0;
    var b = 0;
 
    const handleOnChange = (event)=>{
// console.log("on change");
setText(event.target.value);

}

const handleUpCase = ()=> {
  // console.log("your written text is " , text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Letters are uppercased successfully" , "success");

  // console.log("uppercase letters are" , text);
  a=1;
  console.log(a);


    }
    const handleLoCase = ()=>{

    let lowC = text.toLocaleLowerCase();
    setText(lowC);
a=2;
props.showAlert("Letters are Lowercased successfully" , "success");

console.log(a);

    }
    const handleClear = ()=>{
setText(" ");

    }
    const handleCopy = ()=>{
      let text = document.getElementById("floatingTextarea");
navigator.clipboard.writeText(text.value);

    }
    const written = ()=>{
     
setText(myTxt);

     
    } 
  return (
    <>
    <div id='hd'>
      <div >
      <h1 id='hd' >{props.heading}</h1>
      <div className="form-floating mb-3" >
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="floatingTextarea" rows="10"></textarea>

</div>
  <button className='btn.primary' id='btn1' onClick={handleUpCase} >Convert to Upper-case</button>
  <button className='btn.primary mx-3 ' id='btn2' onClick={handleClear}>Clear Text</button>
  <br />
  <button className='lowC btn.primary my-3' id='btn3' onClick={handleLoCase}>Convert to Lower-case</button>
  <button className='btn.primary mx-3 my-3' id='btn4' onClick={handleCopy}>Copy text</button>
 
</div>
<div className="container">
<h1>Your Text Summary </h1>
<p>{ text.length==0 ?"0": text.split(/[A-Za-z] /).length} Words ,  {text.length} Characters </p>

</div>
<div className="container">
<h2>Preview</h2>
<p>{text.length>0?text : "Enter something in the box to preview here"}</p>
</div>
</div>
</>
  )
}
