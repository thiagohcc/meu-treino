import React, { useState, ChangeEvent, FormEvent } from 'react';
import { loginRequest, setToken } from '../services/LoginRequest';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { AxiosError } from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPaasword, setShowPassword] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleMouseDown = () => {
    setShowPassword(true);
  };

  const handleMouseUp = () => {
    setShowPassword(false);
  };

  const makeLogin = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const token = await loginRequest('/login/signin', { email, password });
      setToken(token);
      setLoggedIn(true);
      localStorage.setItem('token', token);
      navigate('/');

    } catch (error) {
      setLoggedIn(false);
      if (error instanceof AxiosError) {
        console.error('ERROR 404: ', error.message);
      } else {
        console.error('An unknown error occurred');
      }
    };

  }

  return (
    <div>
      <div className='logo'>
        <img src={logo} alt="logo" className='logo' id='logo' />
      </div>
      <h1>Login</h1>
      <form data-testid="login-form">
        <label htmlFor="login-email">
          <input
            id="login-email"
            data-testid="login-email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder='Email'
          />
        </label>
        <label htmlFor="login-password">
          <input
            id="login-password"
            data-testid="login-password"
            type={showPaasword ? "texto" : "password"}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder='Password'
          />
        </label>
        <p
          data-testid="wrong-login">
            { loggedIn == false && 'Usuário ou senha incorretos.' }
        </p>
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          type="button"
        > exibir senha </button>

        <button
          id="login-submit"
          data-testid="login-submit"
          onClick={(event) => makeLogin(event)}
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a data-testid="signup" href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
