import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to='/'>
                <div>All Stocks</div>
            </Link>
            <Link to='/stock'>
                <div>Stock</div>
            </Link>
        </div>
    )
};
export default Nav
