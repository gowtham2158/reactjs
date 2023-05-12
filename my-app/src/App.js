import img1 from './videos/jk3.jpg'
import {useState} from 'react';

import "./App.css";
import Calci from './Calci';
import Gowtham from './Gowtham';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Login from './login';
import React from 'react';
import Read from './Read';
import Update from './Update';
import One from './one';



export default function App(){
    // const [name1,setName]=useState(0);
    //         const hello =() =>{
    //             setName("hello kavi");
    //         }
            // const [name2,setName]=useState(0);
            // const gowtham =() =>{
            //     setName(name2+1);
            //           }
            //           const gowtham1=() =>{
            //             setName(name2-1)
            //           }

// const [result,setresult] = useState('');
// const click =(a) =>{
//     setresult(result.concat(a.target.name))
//     }
//     const clear =() =>{
//         setresult("");}
//         const c =() =>{
//             setresult(result.slice(0,-1))}
//             const equal =() =>{
//                 setresult(eval(result))}
           

// const navi=useNavigate();
// const gk=()=>{
//     navi('/g')}

// const navi=useNavigate();
// const create=()=>{
//     navi('/login')
// }

// const navi=useNavigate();
// const Create=()=>{
//     navi('/login')
// }
//     let a= "yuva"


            
     return(

<div>
 {/* <center><h1 id='h'>Crud Application</h1></center>

<One name={a}></One> */}

// {/* <Login></Login> */}
    




 <BrowserRouter>
        <button id='b1'><Link to="/Login">Create</Link></button>
        <button id='b2'><Link to="/Read">Read</Link></button>
        <button id='b3'><Link to="/Update">Update</Link></button>
        <Routes>
        <Route   path='Login' element={<Login/>} />
        <Route path='Read' element={<Read></Read>}/>
        <Route path='Update' element={<Update></Update>}/>
        </Routes>
   </BrowserRouter>

   


   

 {/* <div className="container">
    <div className="d-flex flex-row">
        <marquee direction="right"><div className="col"><img src={img1} alt="" style={{width:"100px",height:"100px"}} ></img></div></marquee>
        <marquee direction="left"><div className="col-auto"><img src={img1} alt="" style={{width:"100px",height:"100px"}} ></img></div></marquee>
    </div><br></br>

<div className="d-flex justify-content-center flex-row">
    <marquee direction="up"><div><img src={img1} alt="" style={{width:"100px",height:"100px"}} ></img></div></marquee>
</div><br></br>
    <div className="d-flex flex-row">
        <marquee direction="right"><div className="col"><img src={img1} alt="" style={{width:"100px",height:"100px"}} ></img></div></marquee>
        <marquee direction="left"><div className="col-auto"><img src={img1} alt="" style={{width:"100px",height:"100px"}} ></img></div></marquee>
    </div><br></br>
 

             <h1>  {name1}</h1>
        <button onClick={hello}>click me</button>  */}
 {/* <div className='d-flex'>
            <h1> {name2}</h1>
            <div>
            <Calci></Calci>
        </div>
       
        </div>
       

        <div className='d-flex justify-content-start'>
            <div><button onClick={gowtham}>+</button></div>
        </div>
        <div className='d-flex'>
            <div><button onClick={gowtham1}>-</button></div>
        </div>
        <Gowtham></Gowtham> */}
         
        
{/* <div className='container'>
<table>
    
       <tr> 
       <td colSpan={4}><input type="text" value={result} id="display"></input></td></tr>
        <tr>
        <td><button onClick={clear} id="clr">clr</button></td>        
        <td><button onClick={c} id="c">c</button></td>
        <td><button name="%" onClick={click}>%</button></td>
        <td><button name="/" onClick={click}>/</button></td>
        </tr>
        <tr>
        <td><button name="7" onClick={click}>7</button></td>
        <td><button name="8" onClick={click}>8</button></td>
        <td><button name="9" onClick={click}>9</button></td>
        <td><button name="*" onClick={click}>*</button></td>
        </tr>
        <tr> 
        <td><button name="4" onClick={click}>4</button></td>
        <td> <button name="5" onClick={click}>5</button></td>
        <td><button name="6" onClick={click}>6</button></td>
        <td> <button name="-" onClick={click}>-</button></td>
        </tr>
        <tr>
        <td><button name="1" onClick={click}>1</button></td>
        <td> <button name="2" onClick={click}>2</button></td>
        <td><button name="3" onClick={click}>3</button></td>
        <td><button name="+" onClick={click}>+</button></td>
        </tr>
        <tr>
        <td><button name="00" onClick={click}>00</button></td>
        <td><button name="0" onClick={click}>0</button></td>
        <td><button name="." onClick={click}>.</button></td>
        <td><button name="=" onClick={equal}>=</button></td>
        </tr>

    </table>
</div>
     */}
     
 </div>)}
 
