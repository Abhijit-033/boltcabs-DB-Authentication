import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <p>Password</p>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/register">New User Registration</Link>
    </div>
  );
}

export default Login;
