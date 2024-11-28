import React, { useEffect } from "react";
import axios from "axios";

const Axios = () =>{

const getData = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}

// also we can use async await (like below)

/* const getData = async()=>{
    try{
      const response= await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);
    }catch(err){
      console.log(err);
  }
} 
*/

useEffect(()=>{
    getData()
},[])
return (
    <div>

    </div>
)

}

export default Axios;

