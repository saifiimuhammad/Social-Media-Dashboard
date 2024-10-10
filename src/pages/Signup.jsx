import { useState } from "react";

const Signup = () => {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) setError("Passwords do not match");
    else setError("");
  };

  return (
    <main className="signup">
      <div className="signup-container container">
        <h1 className="signup-title">Join us today!</h1>
        <div className="signup-content">
          <form action="post" className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="signup-labels">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="signup-inputs"
              required
            />
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
	  onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="confirm-password" className="signup-labels">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="signup-inputs"
	  onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
	  <div className="form-error-container">
	  {error}
	  </div>
	  <div className="submit-btn-container">
            <button type="submit" name="submit" className="signup-btn btn">
              Sign Up
            </button>
	  <a className="already-registered">Already Registered? Login.</a>
	  </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
