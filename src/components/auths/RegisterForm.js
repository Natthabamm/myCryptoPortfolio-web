import React, { useContext, useState } from "react";
import axios from '../../config/axios';
import rocket from '../../pics/Rocket.png';
import ellipse from '../../pics/Ellipse.png';
import googleIcon from '../../pics/googleIcon.png';
import '../../styles/login/RegisterForm.css';
import { ErrorContext } from '../../contexts/ErrorContext';
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleSubmitRegister = async e => {
    e.preventDefault();
    try {
      setError('');
      const res = await axios.post('/users/register', {
        username,
        email,
        password,
        confirmPassword
      });
      navigate('/confirmregister')
    } catch (err) {
      setError(err.response.data.message)
    }
  };

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
                <span className="bnt-exist" onClick={e => navigate('/')}>
                  <i className='fas fa-times-circle' id="i-reg"></i>
                </span>
              </div>

              <form onSubmit={handleSubmitRegister}>
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
                  value={username}
                  onChange={e => setUsername(e.target.value)}
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label for='password'>Password</label>
                <br />
                <input
                  type='password'
                  id='password-register'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <br />
                <br />
                <label for='confirmpassword'>Confirm password</label>
                <br />
                <input
                  type='password'
                  id='confirm-email-register'
                  name='confirmPassword'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
                <br />
                <input type='submit' value='Register' className='register-btn' />
                <p>or continue with</p>
                <button className='google-btn'>
                  <a href='/login/federated/accounts.google.com'>
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
