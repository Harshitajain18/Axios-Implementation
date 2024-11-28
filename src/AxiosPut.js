import React, { useState } from 'react'
import axios from 'axios';
import './Axios.css';

const AxiosPut = () => {
    const [InputData, setInputData]=useState([]);

    const handleData = (event) =>{
        console.log(event.target.value);
        setInputData({...InputData,[event.target.name]:event.target.value})
    }

    const HandleForm=(event)=>{
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",InputData)
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const HandleUpdate = (e) =>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",InputData).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const HandleDelete = (e) =>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <div>
      <form className='form' onSubmit={HandleForm}>
        <input type='text' placeholder='Enter First Name' name='fname' onChange={handleData}></input>
        <br></br>
        <input type='text' placeholder='Enter Last Name' name='lname' onChange={handleData}></input>
        <br></br>
        <button className='update-btn' onClick={HandleUpdate}>Update</button>
        <br></br>
        <button className='delete-btn' onClick={HandleDelete}>Delete</button>
        <br></br>
        <button className='btn'> Submit</button>
      </form>
    </div>
  )
}

export default AxiosPut;