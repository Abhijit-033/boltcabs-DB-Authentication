import "./App.css";
import FirstLoginRegisterBtn from "./FirstLoginRegisterBtn.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstLoginRegisterBtn />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
