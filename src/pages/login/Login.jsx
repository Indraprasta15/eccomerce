import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <h2 className="title">SIGN IN</h2>
      <p className="attention">Please enter your username and password!</p>
      <input 
        type="text" 
        placeholder="username" 
        className="inputlogin"
        onChange={(e) => setUsername (e.target.value)}
        />
      <input 
        type="password" 
        placeholder="password" 
        className="inputlogin"
        onChange={(e) => setPassword(e.target.value)}
        />
      <button className="buttonlogin" onClick={handleClick}>LOGIN</button>
    </div>
  )
}

export default Login;