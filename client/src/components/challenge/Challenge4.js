import React from "react";
import spotdiff from "../../img/spotdiff.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Challenge4(){
    
    const [val, setVal] = useState("");

    return (<>
            <input style={{display:"inline-block",width:"30%"}} text="number" value={val}  onChange={event => setVal(event.target.value)}/>
        <Link to={val==="6"?"/challenge5":"/end"} className="btn" >enter</Link>
        <img style={{width:"50%",float:"right"}} src={spotdiff} alt="spot the difference"/>
        </>
    );

}
export default Challenge4;