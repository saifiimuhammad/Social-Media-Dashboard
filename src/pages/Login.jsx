import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState("");
	const navigate = useNavigate();
  const AUTH_TOKEN = 1234;

  const handleLogin = (e) => {
	e.preventDefault();
  localStorage.setItem('authToken', AUTH_TOKEN);
	navigate('/dashboard');
  };

  return (
    <main className="signup">
      <div className="signup-container container">
        <h1 className="signup-title">Welcome Back User!</h1>
        <div className="signup-content">
          <form action="post" className="signup-form" onSubmit={handleLogin}>
            <label htmlFor="email" className="signup-labels">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="signup-inputs"
              required
            />
            <label htmlFor="password" className="signup-labels">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="signup-inputs"
              required
            />
	  <div className="form-error-container">
	  {error}
	  </div>
	  <div className="submit-btn-container">
            <button type="submit" name="submit" className="signup-btn btn">
        	Login
            </button>
	  <Link to='/signup' className="already-registered">New here? Register now!</Link>
	  </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
