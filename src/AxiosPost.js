import React, { useState } from 'react'
import './Axios.css';
import axios from 'axios';

const AxiosPost = () => {
    
    // const data = {
    //     fname:"",
    //     lname:""
    // }

const [InputData,setInputData]=useState([]);

const HandleData = (event) =>{
    console.log(event.target.value);
    setInputData({...InputData, [event.target.name]:event.target.value})
}

const HandleForm = (event) =>{
    event.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users" , InputData).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err)
    })
}

return (
    <div>
      <form className='form' onSubmit={HandleForm}>
        <input type='text' placeholder='Enter First Name' name='fname' onChange={HandleData}></input>
        <br></br>
        <input type='text' placeholder='Enter Last Name' name='lname'  onChange={HandleData}></input>
        <br></br>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default AxiosPost;
