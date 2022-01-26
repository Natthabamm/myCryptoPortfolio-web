import React from "react";
import "../../styles/login/LoginForm.css";
import googleIcon from "../../pics/googleIcon.png";
import ellipse from "../../pics/Ellipse.png";
import rocket from "../../pics/Rocket.png";

const LoginFrom = () => {
  return (
    <>
      <div className='main'>
        <div className='left-content'>
          <img src={ellipse} alt='' width={300} />
        </div>
        <div className='login-form'>
          <h1>Welcome Back!</h1>
          <div className='div-form'>
            <div className='header-form'>
              <h2>Login</h2>
              <div>
                <i className='fas fa-times-circle'></i>
              </div>
            </div>
            <form>
              <label for='email'>Email</label>
              <br />
              <input
                type='email'
                id='email'
                name='email'
                value='example@gmail.com'
              />
              <br />
              <br />
              <label for='password'>Password</label>
              <br />
              <input
                type='password'
                id='password'
                name='password'
                value='Password'
              />
              <br />
              <a href='/' className='forgot-pass'>
                Forgot Password?
              </a>
              <input type='submit' value='Login' className='login-btn' />
              <p>or continue with</p>
              <button className='google-btn'>
                <a href='/google'>
                  <img src={googleIcon} alt='' width={30} />
                </a>
              </button>
              <p>
                Don't have an account yet?
                <strong>
                  <a href='/register' className='register-here'>
                    Register here
                  </a>
                </strong>
              </p>
            </form>
          </div>
        </div>
        <div className='right-content'>
          <img src={rocket} alt='' />
        </div>
      </div>
    </>
  );
};

export default LoginFrom;
