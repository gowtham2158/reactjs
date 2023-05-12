import axios from "axios"
import { useEffect, useState } from "react"
import { Api } from "./Api"

export default function Read(){


    const [name,setName]=useState([]);   
                      
useEffect(()=>{
    
    axios.get(Api).then((data)=>{
        setName(data.data);
})
},[])


const del=(a)=>{
    axios.delete(`${Api}/${a}`).then(()=>{ axios.get(Api).then((data)=>{
        setName(data.data);})
})}

   
    return(
        <div>
 <center>

<table className="table table-bordered table-warning bg-warning">

{name.map((d)=>(
    <tr>
        <td>{d.id}</td>
        <td className="text-light">{d.name}</td>
        <td className="text-light">{d.pass}</td>
        <td><button onClick={()=>del(d.id)}>del</button></td>
    </tr>
))}


</table>


 </center>

        </div>
    )
}