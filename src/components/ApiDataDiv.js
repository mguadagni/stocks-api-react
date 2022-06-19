import React from 'react'
import { useApiDataContext } from '../providers/ApiDataProvider'

export const ApiDataDiv = (props) => {

    const {data} = useApiDataContext();

  return (
    <div style={{...props.style}}>
        <h2>Data</h2>
        {/*JSON.stringify(data, null, 2)*/}
        {data.length > 0 ? data.map(stock => {return (
          <div key={stock.id} style={{border: "1px solid grey", marginTop: 10, borderRadius: 5}}>
            <h3>{stock.Symbol} - {stock.Exchange}</h3>
            <p>Market Cap: ${stock.MarketCapitalization.toLocaleString('us')}</p>
          </div>
        )}) : null}
    </div>
  )
}
