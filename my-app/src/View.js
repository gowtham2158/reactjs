import axios from "axios";
import { useEffect, useState } from "react"
import { Api } from "./Api";
import "./View.css"
import { FaPhone, FaTrash, FaWhatsapp } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import Calling from "./calling";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ReactWhatsappButton from "react-whatsapp-button";
import ReactWhatsapp from "react-whatsapp";


export default function View(){
   
    const [first,setFirst]=useState([]); 
    useEffect(()=>{
        axios.get(Api).then((data)=>{
            setFirst(data.data);
        },[])
})

const del=(a)=>{
    axios.delete(`${Api}/${a}`).then(()=>{ axios.get(Api).then((data)=>{
        setFirst(data.data);})
})}
const navi=useNavigate();
const Gowtham=()=>{
    navi("/Calling")
}
// const[hii, setHii]=useState();
// const Gowtham=(b)=>{
//     setHii(<Calling></Calling>)
// }

// let calls=(d.phone)


    return(
        <div>
                
            
        <div  data-aos="fade-up">
    <table className="table table-bordered" id="table1"    >
                <tr>
                    <td colSpan={4} id="td3">Contact Details</td>
                </tr>
                 {first.map((d)=>(
                    <tr className="tr1">
                        <td id="td1">{d.id}</td>
                        <td id="td2">{d.first} {d.last}</td>
                        <td id='td2'>{d.phone}</td>
                        <td><i id="icon1" onClick={()=>del(d.id)}><FaTrash></FaTrash></i></td>
                        
                        <td><a href={"tel:+91" + (d.phone)}><i id="garuda"><FaPhone></FaPhone></i></a></td>
                        <td><a href={"https://wa.me/"+(d.phone)}><i id="garuda1"><FaWhatsapp></FaWhatsapp></i></a></td>
                    </tr>

))}
            </table>
        
            </div>

        </div>
    )
}