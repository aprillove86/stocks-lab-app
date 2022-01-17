import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    return (
        <div className='allStocks'>
            {stocks.map((stock) => {
                const { name, symbol, lastPrice, change, high, low, open} = stock;
                return (
                    <Link to={`/stocks/${symbol}`} key={symbol}>
                        <h2>{name}</h2>
                    </Link>
                )
            })
            }
        </div>
    )
}

