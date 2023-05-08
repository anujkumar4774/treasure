import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dog from "../../img/Dog.jpg";
function Challenge1(){
    const [val, setVal] = useState("");
    

    return (<>
        <h3>Count the differences</h3>
        <input style={{display:"inline-block",width:"30%"}} text="number" value={val}  onChange={event => setVal(event.target.value)}/>
        <Link to={val==="5"?"/challenge2":"/end"} className="btn" >enter</Link>
        <img style={{width:"50%",float:"right"}} src={Dog} alt="spot the difference"/>
        </>
    );

}
export default Challenge1;