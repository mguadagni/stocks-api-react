import React from 'react'
import { useApiDataContext } from '../providers/ApiDataProvider'
import { StockOverview } from './StockOverview';

export const ApiDataDiv = (props) => {

    const {data} = useApiDataContext();

  return (
    <div style={{...props.style}}>
        <h2>Data</h2>
        {/*JSON.stringify(data, null, 2)*/}
        {data.length > 0 ? data.map(stock => {return (
          <div key={stock.id} style={{border: "1px solid grey", marginTop: 10, borderRadius: 5}}>
            <StockOverview data={stock} />
          </div>
        )}) : null}
    </div>
  )
}
 