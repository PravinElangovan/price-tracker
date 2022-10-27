import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Coin from'./Coin'


function App() {
  const[input,setInput]=useState('')
  const [coins,setCoins]=useState([])

  useEffect(() => {
    
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res =>{
      setCoins(res.data)
      console.log(coins)
    })
    
      
  }, [])
  const coinList = coins.filter(coin =>
    coin.name.toString().toLowerCase().includes(input.toString().toLowerCase())
  );

  return (
    <div className="App">
      <div className='top'>
        <h1>Search A Currency</h1>
        
        <input type="text"  value={input}  className = "input" onChange={(e => setInput(e.target.value))} />
        <hr />
      </div>
      
        <div>{coinList.map(coin => {
          return(
           <Coin key = {coin.id}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           price={coin.current_price}
           priceChange={coin.price_change_percentage_24h}
           currentPrice={coin.current_price}
           value={coin.market_cap}
           /> 
           )
        })}
        </div>

    </div>
  );
}

export default App;
