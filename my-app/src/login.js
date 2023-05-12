import"./login.css"
import axios from 'axios'
import { Api} from './Api'
import React, { useState } from "react";
export default function Login(){

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(Api,{
            name,pass
        })
        setName("");
        setPass("")
    
    }
        // const emailInput = event.target.email;
    //     const pswdInput = event.target.pswd
     const [name, setName]=useState();
     const [pass, setPass]=useState();

    return(
        <div>
            <form onSubmit={handleSubmit} id="form"> 
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="enter a email" name="email" id="i1"></input>
                <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control" placeholder="enter a password" name="pswd" id="i2"></input>
                <input type="submit" className="btn btn-primary" id="l1"></input>
            </form>
        
 </div>
    )
}