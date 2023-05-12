
import { useState } from "react";
import ReactDom from 'react-dom';
export default function Clock(){

//     const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
// ReactDom.render(
//     <>
//     <p>Today's date is {date}</p>
//     <p>Today's time is {time}</p>
//     </>
//     , 
//     document.getElementById('root'));

const Clock =()=>{
    let time=new Date().toLocaleTimeString();
    const[currentTime, setCurrentTime]=useState(time);

    const updateTime=()=>{
        let time=new Date().toLocaleTimeString(); 
        setCurrentTime(time);}
    
    setInterval(updateTime, 1000);

    return(
        <div><h1>{currentTime}</h1></div>
    )
}}