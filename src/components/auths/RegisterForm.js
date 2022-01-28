import React from "react";
import rocket from '../../pics/Rocket.png';
import ellipse from '../../pics/Ellipse.png';
import googleIcon from '../../pics/googleIcon.png';
import '../../styles/login/RegisterForm.css';

const RegisterForm = () => {
  return (
    <>
      <>
        <div className='main-reg'>
          <div className='left-content-reg'>
            <img  src={ellipse} alt='' width={300} />
          </div>
          <div className='login-form-reg'>
            <h1>Register with us</h1>
            <div className='div-form-reg'>
              <div className='header-form-reg'>
                <h2>Register</h2>
                <div>
                  <i className='fas fa-times-circle' id="i-reg"></i>
                </div>
              </div>
              <form>
                <label for='username'>Username</label>
                <label className="already-reg">Already registered? 
                    <strong>
                        <a className="a-reg" href="/login">Log in</a>
                    </strong>
                </label>
                <br />
                <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Username'
                />
                <br />
                <br />
                <label for='email'>Email</label>
                <br />
                <input
                  type='email'
                  id='email-register'
                  name='email'
                  placeholder='example@gmail.com'
                />
                <br />
                <br />
                <label for='email'>Email</label>
                <br />
                <input
                  type='password'
                  id='password-register'
                  name='password'
                  placeholder='Password'
                />
                <br />
                <br />
                <label for='confirmpassword'>Confirm password</label>
                <br />
                <input
                  type='email'
                  id='confirm-email-register'
                  name='confirmPassword'
                  placeholder='Confirm password'
                />
                <br />
                <input type='submit' value='Register' className='register-btn' />
                <p>or continue with</p>
                <button className='google-btn'>
                  <a href='/google'>
                    <img src={googleIcon} alt='' width={30} />
                  </a>
                </button>
              </form>
            </div>
          </div>
          <div className='right-content-reg'>
            <img src={rocket} alt='' />
          </div>
        </div>
      </>
    </>
  );
};

export default RegisterForm;
