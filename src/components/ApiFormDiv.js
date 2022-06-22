import React, { useState } from 'react'
import axios from 'axios'
import { useApiDataContext } from '../providers/ApiDataProvider'

export const ApiFormDiv = (props) => {

    const BASE_URI = "http://localhost:4000/api/overview/"

    const [formData, setFormData]= useState({query: '', selectedQuery: 'all', uploadInput: ''})
    const {selectedQuery, query, uploadInput} = formData;

    const {setData} = useApiDataContext();


    const noQueryOptions = ['all']

    const requestData = () => {
        const url = BASE_URI + (noQueryOptions.includes(selectedQuery) ? selectedQuery : selectedQuery + "/" + query)
        axios.get(url)
        .then( res => {
            setData(res.data)
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + err.message)
            console.log(err);
        })
    }
    const deleteAllResources = () => {
        axios.delete(BASE_URI + "all")
        .then( res => {
            setData([])
            alert("Deleted All Resources:\n"+res.data)
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + err.message)
            console.log(err);
        })
    }
    const uploadTestResources = () => {
        axios.post(BASE_URI + "all")
        .then( res => {
            setData(res.data)
            setFormData({...formData, uploadInput: ''})
            alert("Uploaded Test Resources")
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + err.message)
            console.log(err);
        })
    }

    const uploadResources = () => {
        axios.post(BASE_URI + uploadInput)
        .then( res => {
            setData([res.data])
            alert("Uploaded Test Resources")
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + err.message)
            console.log(err);
        })
    }

  return (
    <div style={{...props.style}}>
        <h2>API Form</h2>
        <select value={selectedQuery} onChange={e=>{setFormData({...formData, selectedQuery: e.target.value})}}>
            <option value="all">All</option>
            <option value="exchange">By Exchange</option>
            <option value="symbol">By Symbol</option>
            <option value="marketcapgte">Market Cap Greater Than</option>
            <option value="yearhighgte">High Year Greater Than</option>
            <option value="ddbefore">Dividend Date Before yyyy-mm-dd</option>
        </select>
        <input 
            style={{textAlign: 'center', display: noQueryOptions.includes(selectedQuery) ? 'none' :'initial'}}
            type='text' 
            id='text-input'
            placeholder='Search Data'
            value={query}
            onChange={e=>{setFormData({...formData, query: e.target.value})}}
        />
        <button
            syle={{marginTop:10}}
            onClick={requestData}
        >
            Request Data
        </button>
        <button
            syle={{marginTop:10}}
            onClick={deleteAllResources}
        >
            Delete All Data
        </button>
        <button
            syle={{marginTop:10}}
            onClick={uploadTestResources}
        >
            Upload Test Data
        </button>

        <input 
            style={{textAlign: 'center', marginTop: 50}}
            type='text' 
            id='text-input'
            placeholder='Upload Input'
            value={uploadInput}
            onChange={e=>{setFormData({...formData, uploadInput: e.target.value})}}
        />
        <button
            syle={{marginTop:10}}
            onClick={uploadResources}
        >
            Upload Resource By Input
        </button>
    </div>
  )
}