import { FaUser } from "react-icons/fa";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Addconct from "./Addcontact";
import './Contact.css'
import View from "./View";
import Calling from "./calling";
export default function Contact(){
    return(
        <div>
            <div>
           <i id="icon2"> <FaUser></FaUser></i>
            <center><h1 id="h1">Contact</h1></center>
            
            <BrowserRouter>
            <button id='contact' ><Link to="/List">Add new contact</Link></button>
            <button id='Viewbtn' ><Link to="/View">View contact</Link></button>
            <Routes>
                <Route path="List" element={<Addconct></Addconct>}></Route>
                <Route path="View" element={<View></View>}></Route>
                <Route path="/Calling" element={<Calling></Calling>}></Route>
            </Routes>
            </BrowserRouter>
            </div> 
        </div>
    )
}