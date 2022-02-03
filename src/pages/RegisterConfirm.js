import React from "react";
import { Link } from "react-router-dom";
import "../styles/registerConfirm/RegisterConfirm.css";
import complete from "../pics/registerConfirm/complete.png";
import rocket from "../pics/Rocket.png"
import ellipse from "../pics/Ellipse.png"

const RegisterConfirm = () => {
  return (
    <>
      <div className='main-register-comfirm'>
        <div className="head-register-confirm-main">
          <img className="rocket-register-confirm" src={rocket} atl='rocket'/>
        </div>
        <div className='confirm-register-div'>
          <img src={complete} alt='complete' width={80} height={80} />
          <h2 className='h2-confirm-register'>Registration successfully!</h2>
          <h5 className='h5-register-confirm'>
            Thank you for joining us. Let's enjoy managing your portfolio.
          </h5>
          <Link className='link-confirm-register' to='/login'>
            Return to Log in
          </Link>
        </div>
        <div className="footer-register-confirm">
          <img className="ellipse-regidter-confirm" src={ellipse} alt="ellipse" width={350} height={300} />
        </div>
      </div>
    </>
  );
};

export default RegisterConfirm;
