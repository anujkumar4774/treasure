import React from "react";

import { Link } from "react-router-dom";
import clickme from "../../img/clickme.png";
function Challenge2(){
    

    return (<>
        <h3>Remember your past</h3>
        <p>click the correct img</p>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/challenge3" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        <Link to="/end" ><img style={{width:"10%"}} src={clickme} alt="clickme"></img></Link>
        </>
    );

}
export default Challenge2;