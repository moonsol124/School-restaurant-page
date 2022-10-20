import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css';

function orderComplete(props) {
    
    return (
        <div className='landing'>
            <div className="landing-header login-form-container">
                <div className="landing-header-texts login-form-max-width">
                    <h1 style={{textAlign: 'center'}}> Thank you for your order</h1> 
                    <p> Your order number is: </p>
                    <p> {props.orderNumber} </p>
                    <div>
                        <p>CLICK <Link to='/School-restaurant-page' className="navigate-link">HERE</Link> TO GO BACK TO HOME</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default orderComplete;