import React from "react";
import "../../styles/navbar/PublicNavbar.css";

const PublicNavbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>
            <a href='/' className='brand'>
              myCryptoPort
            </a>
          </div>
        </div>
        <div className='right-btn-group'>
          <div className='btn-login' role='button'>
            <a href='/login' className='nav-link'>
              Login
            </a>
          </div>
          <button className='btn-register'>
            <a href='/register' className='nav-link'>
              Rigiser
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default PublicNavbar;
