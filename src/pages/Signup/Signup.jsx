import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import "./Signup.scss";

const Register = () => {
  const [inputs, setInputs] = useState({ username: "", email: "", password: "", name: "" });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (inputs) {
        await axios.post("http://localhost:9999/api/register", inputs);
        await login(inputs);
        navigate("/");
      }
    } catch (error) {
      setErr(error.response.data);
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <div className="inputs">
          <p>Name</p>
          <input type="Name" placeholder="Name" className="round-input" name="name" onChange={handleChange} />
        </div>
        <div className="inputs">
          <p>Surname</p>
          <input type="Surname" placeholder="Surname" className="round-input" name="surname" onChange={handleChange} />
        </div>
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
            s
            name="password"
            onChange={handleChange}
          />
        </div>
      </form>
      <button className="round-button" onClick={handleRegister}>
        Sign Up
      </button>
      <div className="error">{err && err}</div>
      <p className="suggestion">
        Already have an account? <a href="/login">Login!</a>
      </p>
    </div>
  );
};

export default Register;
