// Login.js

import React, { useEffect, useState } from 'react';
import './login.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import Material-UI icons
import { AuthenticateUser } from '../../api/user';
import {login} from '../../Action/authenticate';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = async() => {
    // Implement your login logic here
    try{
      const result = await AuthenticateUser({email , password})
      console.log(result);
      if(result.status){
          dispatch(login({name:result.name , userToken: result.userToken}));
          Navigate('/')
      }   
      else{
          
          setErrorMessage(result.msg);

      }
    }
    catch(err)
    {
      console.log(err);
      setErrorMessage(err);
    }
  };
  useEffect(()=>{
    setTimeout(()=>{
      setErrorMessage('');
    }, 2000)
  },[ errorMessage])
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="neomorphic-card">
        <h2>Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <div className="password-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-toggle-icon" onClick={handleTogglePassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </div>
          </div>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
