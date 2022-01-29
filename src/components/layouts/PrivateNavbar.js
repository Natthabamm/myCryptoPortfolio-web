import React, { useContext } from "react";
import { useRef } from "react";
import { useDetectOutsideClick } from "../../services/useDetectOutsideClick";
import "../../styles/navbar/PrivateNavbar.css";
import { Nav, NavItem } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import userPic from "../../pics/profileImg.png";
import { AuthContext } from "../../contexts/AuthContext";

const PrivateNavbar = () => {
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [isActive1, setIsActive1] = useDetectOutsideClick(dropdownRef1, false);
  const [isActive2, setIsActive2] = useDetectOutsideClick(dropdownRef2, false);
  const handleClick1 = () => setIsActive1(!isActive1);
  const handleClick2 = () => setIsActive2(!isActive2);

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div>
      <Nav className='navbar navbar-dark bg-dark'>
        <div className='d-flex justify-content ms-4'>
          <NavItem>
            <Link to='/' className='navbar-brand'>
              myCryptoPort
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/dashboard' className='nav-link text-light'>
              Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/history' className='nav-link text-light'>
              History
            </Link>
          </NavItem>
        </div>

        <div className='d-flex'>
          {/* Curreny dropdown menu */}
          <span onClick={handleClick1} className='menu1-trigger1'>
            USD <i className='fas fa-caret-down m-2' />
          </span>
          <nav
            ref={dropdownRef1}
            className={`menu1 ${isActive1 ? "active" : "inactive"}`}
          >
            <ul>
              <li className="cur-name">
                Select currency
              </li>
              <li className="li-01">
                <input className="input-private" type='radio' id='usd' name='currency' value='USD'  />
                <label for='usd' id="input-private">
                  {/* <i className="fas fa-dollar-sign" /> */}
                   USD
                </label>
              </li>
              <li className="li-02">
                <input type='radio' id='thb' name='currency' value='THB' className="input-private"/>
                <label for='thb' id="input-private">THB</label>
              </li>
            </ul>
          </nav>

          {/* User dropdown menu */}
          <span onClick={handleClick2} className='menu2-trigger2'>
            <img className="img-private" src={userPic} height={30} width={30} alt='' />
          </span>
          <nav
            ref={dropdownRef2}
            className={`menu2 ${isActive2 ? "active" : "inactive"}`}
          >
            <ul>
            <li className="li-username">
                Hello, Username
              </li>
              <li className="li-1">
                <a href='/setting'>
                  <i className='fas fa-cog' id="i-private" />
                  Setting
                </a>
              </li>
              <li className="li-2">
                <div
                  className="logout-div"
                  role="button"
                  onClick={handleClickLogout}
                >
                  <i className='fas fa-sign-out-alt' id="i-private" />
                  Logout
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Nav>
    </div>
  );
};

export default PrivateNavbar;
