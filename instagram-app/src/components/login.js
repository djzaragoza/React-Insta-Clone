import React from 'react';
import './login.css';

const Mylogin = (props) => {
    return(
        <div class="form-popup" id="myForm">
            <form action="submit" className="form-container">
                <h1>Login</h1>
                <label for="username"><b>Enter your User Name</b></label>
                <input type="text" placeholder="Enter user name" name="username"></input>
                
            </form>
        </div>
    )
}