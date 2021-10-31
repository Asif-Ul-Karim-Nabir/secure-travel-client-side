import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {user, signInUsingGoogle} = useAuth()
    return (
        <div className="login-container">
            <h2>Please Login</h2>
            <h2>{user?.email}</h2>
            <button onClick={signInUsingGoogle}>Sign In Google</button> 
        </div>
    );
};

export default Login;