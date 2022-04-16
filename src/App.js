import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import DarkMode from './components/DarkMode';
import Alert from './components/Alert';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";





function App() {
   const [mTxts, setTxts] = useState("dark")
const[alert , setAlert] = useState(false);
function showAlert(message,type){
setAlert({
   msg : message ,
   type : type
})

setTimeout(() => {
   setAlert(false);
}, 2000);
}
   const [mTxt, setTxt] = useState("Enable-DarkMode")
   const [mode, setMode] = useState("light");
   const toogle = () => {
      if (mode == "light") {
         setMode("dark");
         setTxt("Enable-LightMode");
         setTxts("light");
         document.body.style.backgroundColor = "#655e5e";

         document.getElementById("floatingTextarea").style.backgroundColor = "#655e5e";
         document.getElementById("floatingTextarea").style.color = "white";
         document.getElementById("hd").style.color = "white";
         document.getElementById("hd").style.color = "white";
         showAlert("dark mode is enabled successfully" , "success");
      }
      else {
         document.body.style.backgroundColor = "white";
         setMode("light");
         setTxt("Enable-DarkMode");
         setTxts("dark");
         document.getElementById("floatingTextarea").style.backgroundColor = "white";
         document.getElementById("floatingTextarea").style.color = "black";
         document.getElementById("floatingTextarea").style.color = "black";

         document.getElementById("hd").style.color = "black";

         showAlert("Light mode is enabled successfully" , "success");
      }

   }
  const redDark = ()=>{
   document.body.style.backgroundColor = "rgb(171 34 47)";
setMode("danger");
document.getElementById("floatingTextarea").style.color = "white";
document.getElementById("hd").style.color = "white";
document.getElementById("floatingTextarea").style.backgroundColor = "#773a40";

document.getElementById("btn1").style.color = "white";
document.getElementById("btn2").style.color = "white";
document.getElementById("btn3").style.color = "white";

 

  }


   

   return (
      <>
          <Router>
          <Navbar mode={mode} aboutText="About" title="Textutills" toogle={toogle} mTxt={mTxt} mTxts={mTxts}  redDark={redDark} /> 

         <Alert alert = {alert} />
         <div className="container" id='txt'>  
        
         <Switch>
          <Route path="/about">
           <DarkMode /> 
           
          </Route>
         
          
          
          <Route path="/">
             <Textfield heading="Enter the text to analyze" showAlert={showAlert} /> 
            
          </Route>
        </Switch>
   
         </div> 
    
         </Router> 
      </>
   );
};
export default App;
