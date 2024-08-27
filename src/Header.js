import React from 'react'
import img from "./logo.png"
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img className='header_logo' src={img} />
      </Link>

      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchicon' />
      </div>

      <div className='header_nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to="/Checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;