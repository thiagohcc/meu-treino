import React, { useState } from 'react';

import logo from '../assets/logo.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPaasword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div>
      <div className='logo'>
        <img src={logo} alt="logo" className='logo' />
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
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          type="button"
        > exibir senha </button>

        <button id="login-submit" data-testid="login-submit">Login</button>
      </form>
      <p>
        Don't have an account? <a data-testid="signup" href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
