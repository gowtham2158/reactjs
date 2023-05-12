import { useState } from 'react'
import './Addct.css'
import { Api} from './Api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Addconct(){

    const[first,setFirst]=useState();
    const[last,setLast]=useState();
    const[phone,setPhone]=useState();


  
    const handleSub = (event) => {
        event.preventDefault();
       axios.post(Api,{
            first,last,phone
        })
        setFirst('');
        setLast('');
        setPhone('');}
      

    // let var1=setFirst("");
    // let var2=setLast("");
    // let var3=setPhone("");
    // const handle=(event)=>{

    //     if(var1 || var2|| var3 ==true){
    //         alert("error")
    //     }
    // }
     
     
        
    
    return(
        <div>
            <div data-aos="flip-left">
            <form id="form1" onSubmit={handleSub}> 
            <h1 id='A1'>Add new contact</h1>
            <input type="text" name='user' value={first} onChange={(e)=>setFirst(e.target.value)} className="form-control" placeholder="First Name" id="F1"required></input>
            <input type="text" name='username' value={last} onChange={(e)=>setLast(e.target.value)} className="form-control" placeholder="Last Name" id="L1"required ></input>
            <input type="text" name='number' value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Phone No" id="P1" required></input>
            {/* <button id='S1'> Save</button> */}
            <input type="submit" id="S1"></input>

            </form>
        </div>
        </div>
    )
}