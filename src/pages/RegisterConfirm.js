import React from 'react';
import { Link } from 'react-router-dom';

const RegisterConfirm = () => {
  return (
      <>
        <div className='confirm-register'>
            <h1>Registration successfully!</h1>
            <Link to="/login">Return to Log in</Link>
        </div>
      </>
  );
};

export default RegisterConfirm;
