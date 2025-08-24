import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="login-page">
      <div className="wrapper">
        <form>
          <h1>Log in Form</h1>
          <div className="input-box">
            <input type="text" placeholder="User Name" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label >
              <input className="rem" type="checkbox" />
              Remember me
            </label>
            <a className="for" href="#">Forgot password?</a>
          </div>
          <button className="btn-login" type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have account?<a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
