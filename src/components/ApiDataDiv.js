import React from 'react'
import { useApiDataContext } from '../providers/ApiDataProvider'

export const ApiDataDiv = (props) => {

    const {data} = useApiDataContext();

  return (
    <div style={{...props.style}}>
        <h2>Data</h2>
        {JSON.stringify(data, null, 2)}
        </div>
  )
}
