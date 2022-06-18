import React, { useState } from 'react'
import axios from 'axios'

export const ApiFormDiv = (props) => {

    const BASE_URI = "http://localhost:4000/api/overview/"

    const [inputData, setInputData]= useState("")

    const requestData = () => {
        console.log("Requesting Data...");

        axios.get(BASE_URI + "all")
        .then( res => {
            console.log(res.data);
            alert("Request was succesfull")
        })
        .catch( err => {
            alert("Error: \n" + err.message)
            console.log(err);
        })

       //console.log(inputData);
    }

  return (
    <div style={{...props.style}}>
        <h2>API Form</h2>
        <input 
        style={{textAlign: 'center'}}
        type='text' 
        id='text-input'
        placeholder='Search Data'
        value={inputData}
        onChange={e=>{setInputData(e.target.value)}}
        />
        <button
        syle={{marginTop:10}}
        onClick={requestData}
        >
            Request Data
        </button>
        </div>
  )
}