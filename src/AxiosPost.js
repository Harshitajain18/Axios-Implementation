import React, { useState } from 'react'
import './Axios.css';
import axios from 'axios';

const AxiosPost = () => {
    
const data = {
    fname:"",
    lname:""
}

const [InputData,setInputData]=useState(data);

const HandleForm = (event) =>{
    console.log(event.target.value);
    setInputData({...InputData, [event.target.name]:event.target.value})
}

const HandleData = (event) =>{
    event.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",InputData).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err)
    })
}

return (
    <div>
      <form className='form' onSubmit={HandleData}>
        <input type='text' placeholder='Enter First Name' name='fname' onChange={HandleForm}></input>
        <br></br>
        <input type='text' placeholder='Enter Last Name' name='lname'  onChange={HandleForm}></input>
        <br></br>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default AxiosPost
