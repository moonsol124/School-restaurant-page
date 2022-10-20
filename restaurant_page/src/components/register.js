import '../css/login.css';
import { React, useState, useEffect } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';

function Register(props) {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function sendData(e) {
      e.preventDefault();
      const url = 'http://localhost:5000/register';
      const userFirstName = e.target[0].value; 
      const userSecondName = e.target[1].value;
      const userEmail = e.target[2].value;
      const userFirstPassword = e.target[3].value;
      const userSecondPassword = e.target[4].value;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF=8' },
        body: JSON.stringify({
            userFirstName: userFirstName,
            userSecondName: userSecondName,
            userEmail: userEmail,
            userFirstPassword: userFirstPassword,
            userSecondPassword: userSecondPassword,
        })
     };
        fetch(url, requestOptions)
        .then(data => data.json())
        .then(res => {
            console.log (res)
            if (res.status !== 'success') {
                setMessage(res.message);
                return;
            }
            setMessage('');
            navigate("/School-restaurant-page/login");
        })
    }
  
    return (
        <div className='landing'>
            <div className="landing-header login-form-container">
                <div className="landing-header-texts login-form-max-width">
                    <h1> Register </h1> 
                    <form action='' method='post' onSubmit={sendData} className='login-form'>
                        <div className="login-form-input-container">
                            <label for='first-name'></label>
                            <input name='first-name' id='first-name' type='text' placeholder='First Name' className='login-form-input'></input>
                        </div>
                        <div className="login-form-input-container">
                            <label for='second-name'></label>
                            <input name='second-name' id='second-name' type='text' placeholder='Second Name' className='login-form-input'></input>
                        </div>
                        <div className="login-form-input-container">
                            <label for='email'></label>
                            <input name='email' id='email' type='email' placeholder='Email' className='login-form-input'></input>
                        </div>
                        <div className="login-form-input-container">
                            <label for='password'></label>
                            <input name='password' id='password' type='password' placeholder='Password' className='login-form-input'>
                            </input>
                        </div>
                        <div className="login-form-input-container">
                            <label for='password-confirm'></label>
                            <input name='password-confirm' id='password-confirm' type='password' placeholder='Confirm password' className='login-form-input'>
                            </input>
                        </div>
                        <div className="login-form-btn-group">
                            <p className="authentification-failed-message"> {message}</p>
                        </div>
                        <div className="login-form-btn-group">
                            <button type='submit' className="login-form-btn">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
  
export default Register;