import React, { useState } from 'react'
import axios from 'axios'
import { useApiDataContext } from '../providers/ApiDataProvider'

export const ApiFormDiv = (props) => {

    const BASE_URI = "http://localhost:4000/api/overview/"

    const [inputData, setInputData]= useState("")
    const [selected, setSelected]= useState("all")

    const {setData} = useApiDataContext();

    const noQueryOptions = ['all']

    const requestData = () => {
        console.log("Requesting Data...");

        axios.get(BASE_URI + (noQueryOptions.includes(selected) ? selected : selected + "/" + inputData))
        .then( res => {
            setData(res.data)
            console.log(res.data);
            // alert("Request was succesfull")
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
        <select value={selected} onChange={e=>{setSelected(e.target.value)}}>
            <option value="all">All</option>
            <option value="exchange">By Exchange</option>
            <option value="symbol">By Symbol</option>
            <option value="marketcapgte">Market Cap Greater Than</option>
            <option value="yearhighgte">High Year Greater Than</option>
            <option value="ddbefore">Dividend Date Before yyyy-mm-dd</option>
        </select>
        <input 
        style={{textAlign: 'center', display: noQueryOptions.includes(selected) ? 'none' :'initial'}}
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