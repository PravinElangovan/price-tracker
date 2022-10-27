import React from 'react'
import './App.css'

const Coin = ({name,image,symbol,priceChange,currentPrice,value}) => {
    return (
        <div className='name'>
        <div class="coin-info">
            <span><img src={image}/></span>
            <span id='name'>{name}</span>
            <span id="symbol">{symbol}</span>
            <span>{priceChange < 0 ? <p id="red">{priceChange.toFixed(2)}</p> : <p id="green">{priceChange.toFixed(2)}</p>} </span>
            <span id="currentprice">Current Price ${currentPrice}</span>
            <span id="market-cap">MKT_Cap {value}</span>
         </div>
         <hr/>
        </div>
        
    )
}

export default Coin
