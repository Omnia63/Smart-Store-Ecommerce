import { useState } from "react";
import { loginUser } from "../Redux-toolkit/Slices/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/login-page.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      loginUser({
        email,
        password,
      })
    );

    if (loginUser.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">

        <h1>Welcome Back</h1>

        <form onSubmit={handleSubmit}>

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
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>

          <div className="register-link">
            <h3>Don't have an account?</h3>
            <Link to="/register">Create Account</Link>
          </div>

        </form>

      </div>
    </main>
  );
}

export default Login;
