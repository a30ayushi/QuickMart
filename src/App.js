import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Order from './Orders';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51N1G8MSDLO2cWbVCNIUcRBkKw3PFvEeCWwfiAzPTvPDzp8S1MsAYOgv8wEB2f2chZQqyJwGTrXm4VNRwEKzXOpWY00UzHuqvHb');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        //the user just logged in | the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<> <Login /> </>}>
          </Route>

          <Route path="/orders" element={<> <Header /> <Order /> </>}>
          </Route>

          <Route path="/checkout" element={<> <Header /> <Checkout /> </>}>
          </Route>

          <Route path="/payment" element={<> <Header /> <Elements stripe={promise}>
            <Payment />
          </Elements> </>}>
          </Route>

          <Route path="/" element={<> <Header /> <Home /> </>}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
