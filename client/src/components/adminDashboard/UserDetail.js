import React from "react";
import axios from "axios";
import { useState } from "react";
function UserDetail(){
    const [data,setData] = useState([]);
    axios
    .post("/api/users/allusers")
    .then(res => {console.log(res.data);
        //setData(res.data);
    });
    return (<h1>hello</h1>);

}
export default UserDetail;