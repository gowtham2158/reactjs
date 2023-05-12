import { useState } from "react";
import Calci from "./Calci";
import "./Gowtham.css"
import imgcom from './videos/jk4img.jpg' ;
import imglogo from './videos/imglogo.jfif';
import icon from './videos/icon.webp'
import ws from './videos/ws.jpg'
import logo1 from './videos/logo1.jfif';
import React from "react";
import ReactDom from 'react-dom';
import Clock from "./Clock";
export default function Gowtham(){
    const [name2,setName]=useState(0);
    const gowtham =() =>{
        setName(name2+1);
         }
            const gowtham1=() =>{
               setName(name2-1);
              }
        const handleSubmit = (event) => {
        event.preventDefault();
        const emailInput = event.target.email;
        const pswdInput = event.target.pswd;
        console.log(emailInput.value);
        console.log(pswdInput.value); }
       

   
    
    


    return(
        <div>
            
               <div className="title"><h1 id="g">Gowtham</h1>
                <ul>
                    <li id="list"><a href="#">Home</a></li>&nbsp;&nbsp;
                    <li id="list"><a href="#">Menu</a></li>&nbsp;&nbsp;
                    <li id="list"><a href="#">About</a></li>&nbsp;&nbsp;
                    <li id="list"><a href="#">Contact</a></li>
                </ul></div> 

     <div>
        <div className="float-start">
        <button onClick={gowtham}>+</button>
        <h1 style={{color:"black"}}> {name2}</h1>
        <button onClick={gowtham1}>-</button></div>
        <div className="float-end"><Calci></Calci></div>
    </div> 
        
        
<div className="gh">
<div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="enter a email" id="i1" name="email"></input>
                <input type="password" className="form-control" placeholder="enter a password" id='i2' name="pswd"></input>
                <input type="submit" className="btn btn-primary" id="l1"></input>
            </form>

        
        </div>
        <div className="ws"><img src={ws} alt="" style={{width:"00px", height:"500px",borderRadius:"10%"}}></img></div>
        <div className="logo"><img src={logo1} alt="" className="img-circle" style={{width:"60px",height:"60px",borderRadius:"50px"}}></img></div>
        </div>
    
    </div>


    
    )}

    
