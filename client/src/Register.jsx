import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, password })
      .then((result) => {
        console.log(result);
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <p>Password</p>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
