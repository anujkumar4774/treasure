import React from "react";
import characters from "../../img/characters.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Challenge5(){
    
    const [val, setVal] = useState("");

    return (<>
    <h4>how many characters are there in A-Z?</h4>
            <input style={{display:"inline-block",width:"30%"}} text="number" value={val}  onChange={event => setVal(event.target.value)}/>
        <Link to={val==="12"?"/finish":"/end"} className="btn" >enter</Link>
        <img style={{width:"50%",float:"right"}} src={characters} alt="A-Z" title="A-Z"/>
        </>
    );

}
export default Challenge5;