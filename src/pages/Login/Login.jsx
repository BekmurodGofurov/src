import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (inputs) {
        await login(inputs);
        navigate("/");
      }
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="inputs">
          <p>Email</p>
          <input type="text" placeholder="Email" className="round-input" name="email" onChange={handleChange} />
        </div>
        <div className="inputs">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            className="round-input"
            name="password"
            onChange={handleChange}
          />
        </div>
      </form>
      <button className="round-button" onClick={handleLogin}>
        Login
      </button>
      <div className="error">{err && err}</div>
      <p className="suggestion">
        Don't have an account? <a href="/register">SignUp!</a>
      </p>
    </div>
  );
};

export default Login;
