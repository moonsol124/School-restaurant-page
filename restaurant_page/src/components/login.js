import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css';

function LogIn(props) {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function sendData(e) {
      e.preventDefault();
      const url = 'http://localhost:5000/login';
      const userEmail = e.target[0].value; 
      const userPassword = e.target[1].value;
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF=8' },
        body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
     };
        fetch(url, requestOptions)
        .then(data => {
            return data.json();
        })
        .then(res => {
            if (res.status !== 'success') {
                setMessage(res.message);
                return;
            }
            setMessage('');            
            props.setToken(res.access_token);
            props.getUser(res.user);
            props.userLoggin();
            navigate("/School-restaurant-page");
        })
    }
  
    function test() {
      const url = 'http://localhost:5000/register';
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF=8',
      'Authorization': 'Bearer '+props.token },
        body: JSON.stringify({ "hi": "hi" })
     };
        fetch(url, requestOptions)
        .then(data => data.json())
        .then(res => {
          // props.setToken(res.access_token);
          console.log (res)
        })
    }
  
    return (
        <div className='landing'>
            <div className="landing-header login-form-container">
                <div className="landing-header-texts login-form-max-width">
                    <h1> Log in</h1> 
                    <form action='' method='post' onSubmit={sendData} className='login-form'>
                        <div className="login-form-input-container">
                            <label for='email'></label>
                            <input name='email' id='email' type='email' placeholder='Email' className='login-form-input'></input>
                        </div>
                        <div className="login-form-input-container">
                            <label for='password'></label>
                            <input name='password' id='password' type='password' placeholder='Password' className='login-form-input'>
                            </input>
                        </div>
                        <div className="login-form-btn-group">
                            <p className="authentification-failed-message"> {message}</p>
                        </div>
                        <div className="login-form-btn-group">
                            <button type='submit' className="login-form-btn">Log in</button>
                            <Link to='/School-restaurant-page/register'><button type='button' className="login-form-btn">Sign up</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
  
export default LogIn;