import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <form data-testid="login-form">
        <label htmlFor="login-email">
          Email:
          <input id="login-email" data-testid="login-email" type="email" />
        </label>
        <label htmlFor="login-password">
          Password:
          <input id="login-password" data-testid="login-password" type="password" />
        </label>
        <button id="login-submit" data-testid="login-submit">Login</button>
      </form>
      <p>
        Don't have an account? <a data-testid="signup" href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
