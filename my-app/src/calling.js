import axios from "axios";
import { Api } from "./Api";
import { useEffect, useState } from "react"
import "./call.css"
export default function Calling(){
    const [first,setFirst]=useState([]); 
    
    useEffect(()=>{
         axios.get(Api).then((data)=>{
             setFirst(data.data);
        },[])
        
        //               axios.get(`${Api}/${a}`).then(()=>{ axios.get(Api).then((data)=>{
        //         setFirst(data.data);})
        // })
})
    return(
        <div>

            <div data-aos="flip-left">
           
            <table id='calling' >
            {first.map((d)=>(
                <tr>
                    <td colSpan={4}><input type='text' placeholder={d.phone} ></input></td>
                </tr>))}
                <tr>
                <td><button>1</button></td>
                <td><button>2</button></td>
                <td><button>3</button></td>
                </tr>
                <tr>
                <td><button>4</button></td>
                <td><button>5</button></td>
                <td><button>6</button></td>
                </tr>
                <tr>
                <td><button>7</button></td>
                <td><button>8</button></td>
                <td><button>9</button></td>
                </tr>
                <tr>
                <td><button>*</button></td>
                <td><button>0</button></td>
                <td><button>#</button></td>
                </tr>
            </table>
            </div>
        </div>

    )
}