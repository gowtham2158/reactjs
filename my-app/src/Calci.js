import {useState} from 'react';

import "./Calci.css";
export default function Calci(){
    const [result,setresult] = useState('');
    const click =(a) =>{
        setresult(result.concat(a.target.name))
        }
        const clear =() =>{
            setresult("");}
            const c =() =>{
                setresult(result.slice(0,-1))}
                const equal =() =>{
                    setresult(eval(result))}
     
   return(
<div>
<div className='container'>
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

</div>
    )
}