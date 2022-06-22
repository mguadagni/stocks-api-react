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
            setFormData({...formData, query: ''})
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + (err.response.data || err.message))
            console.log(err);
        })
    }
        const deleteData = () => {
            const url = BASE_URI + (noQueryOptions.includes(selectedQuery) ? selectedQuery : selectedQuery + "/" + query)
            axios.get(url)
            .then( res => {
                setData(res.data)
                setFormData({...formData, query: ''})
                console.log(res.data);
            })
            .catch( err => {
                alert("Error: \n" + (err.response.data || err.message))
                console.log(err);
            })

    }

    const deleteAllResources = () => {
        axios.delete(BASE_URI + "all")
        .then( res => {
            setData(res.data)
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + (err.response.data || err.message))
            console.log(err);
        })
    }

    const uploadTestResources = () => {
        axios.post(BASE_URI + "all")
        .then( res => {
            setData(res.data)
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + (err.response.data || err.message))
            console.log(err);
        })
    }

    const uploadResources = () => {
        axios.post(BASE_URI + uploadInput)
        .then( res => {
            setData([res.data])
            setFormData({...formData, uploadInput: ''})
            console.log(res.data);
        })
        .catch( err => {
            alert("Error: \n" + (err.response.data || err.message))
            console.log(err);
        })
    }

    const selectedQueryOptions = [
        {value: 'all', innerText: 'all'},
        {value: 'exchange', innerText: 'By Exchange'},
        {value: 'symbol', innerText: 'By Symbol'},
        {value: 'assetType', innerText: 'By Asset Type'},
        {value: 'sector', innerText: 'By Sector'},
        {value: 'name', innerText: 'By Name'},
        {value: 'currency', innerText: 'By Currency'},
        {value: 'country', innerText: 'By Country'},
        {value: 'marketcapgte', innerText: 'Market Cap Greater Than'},
        {value: 'marketcaplte', innerText: 'Market Cap Less Than'},
        {value: 'yearhighgte', innerText: 'Year High Greater Than'},
        {value: 'yearhighlte', innerText: 'Year High Less Than'},
        {value: 'ddbefore', innerText: 'Dividend Date Before yyyy-mm-dd'},
        {value: 'ddafter', innerText: 'Dividend Date After yyyy-mm-dd'},
    ]

    const renderOptions = (optionsArray) => {
        return optionsArray.map( optionData => {
            const {value, innerText} = optionData;
            return (<option value={value}>{innerText}</option>)
        })
    }

  return (
    <div style={{...props.style}}>
        <h2>API Form</h2>
        <select 
            value={selectedQuery} 
            onChange={
                e=>{setFormData({...formData, selectedQuery: e.target.value})}
            }>
            {renderOptions(selectedQueryOptions)}
        </select>
        <input 
            style={{
                textAlign: 'center', marginTop: 50,
                display: noQueryOptions.includes(selectedQuery) ? 'none' :'initial'
            }}
            type='text' 
            id='text-input'
            placeholder='Search Data'
            value={query}
            onChange={e=>{setFormData({...formData, query: e.target.value})}}
        />
        <button
            style={{marginTop: 10}}
            onClick={requestData}
        >
            Request Query Data
        </button>
        <button
            style={{marginTop: 10}}
            onClick={deleteData}
        >
            Delete Query Data
        </button>
        <button
            style={{marginTop: 50}}
            onClick={deleteAllResources}
        >
            Delete All Data
        </button>
        <button
            style={{marginTop: 10}}
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
            style={{marginTop:10}}
            onClick={uploadResources}
        >
            Upload Resource By Input
        </button>
    </div>
  )
}