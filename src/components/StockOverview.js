import React from 'react'

export const StockOverview = (props) => {
    const {data: stock} = props
  return (
    <div key={stock.id} style={{border: "1px solid grey", marginTop: 10, borderRadius: 45}}>
        <h3>{stock.Symbol} - {stock.Exchange}</h3>
        <p>{stock.Name}</p>
        <p>Market Cap: ${stock.MarketCapitalization.toLocaleString('us')}</p>
        <p>Dividend Date: {stock.DividendDate}</p>
    </div>
  )
}
