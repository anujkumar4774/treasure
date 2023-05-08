import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Challenge3(){
    
    const [val, setVal] = useState("");

    return (<>
        <h3>Eating Apples</h3>
        <p>Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?</p>
        <input style={{width:"50%"}} type="text" value={val} onChange={event => setVal(event.target.value)} />
        <Link to={val==="CABDE"?"/challenge4":"/end"} className="btn">enter</Link>
        </>
    );

}
export default Challenge3;