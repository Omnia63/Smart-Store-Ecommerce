import { useState } from "react";
import { registerUser } from "../Redux-toolkit/Slices/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/register-page.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    setPasswordError("Passwords do not match");
    return;
  }
  setPasswordError("");

              dispatch(registerUser({
                name,
            email,
            password
          }))
  };

  return (
    <main className="register-page">
    <div className="register-container">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>

        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
</div>

        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
</div>

        <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {passwordError && <p>{passwordError}</p>}
</div>

        <button type="submit">
          Register
        </button>
        {error && <p className="register-error">{error}</p>}

        <div className="login-link">
        <h3>Already have an account</h3>
        <Link to="/login">Sign In</Link>
        </div>
      </form>
    </div>
  </main>
  );
}

export default Register;
