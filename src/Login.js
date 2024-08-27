import React, { useState } from 'react'
import './Login.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(_auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created a new user with Email and Password
                if (auth) {
                    navigate('/')
                }
            })

            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src={logo} alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn}
                        className='login_signInButton'>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to QuickMart's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register}
                    className='login_registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login;