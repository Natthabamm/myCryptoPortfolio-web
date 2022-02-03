import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useDetectOutsideClick } from "../../services/useDetectOutsideClick";
import "../../styles/navbar/PrivateNavbar.css";
import { Nav, NavItem } from "reactstrap";
import { Link, useNavigate,useLocation } from "react-router-dom";
import userPic from "../../pics/profileImg.png";
import { AuthContext } from "../../contexts/AuthContext";
import { CryptoState } from "../../contexts/CryptoContext";
import dollar from "../../pics/currencies/dollar.png";
import thai from "../../pics/currencies/thaiflag.png";

const PrivateNavbar = () => {
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const [isActive1, setIsActive1] = useDetectOutsideClick(dropdownRef1, false);
  const [isActive2, setIsActive2] = useDetectOutsideClick(dropdownRef2, false);
  // const [isActive, setIsActive] = useState(false);

  const handleClick1 = () => setIsActive1(!isActive1);
  const handleClick2 = () => setIsActive2(!isActive2);

  const { logout, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate("/");
  };

  const { currency, setCurrency } = CryptoState();

  const location = useLocation();

  return (
    <div>
      <Nav className='navbar navbar-dark bg-dark'>
        <div className='d-flex justify-content ms-4'>
          <NavItem className="active">
            <Link to='/dashboard' className='navbar-brand'>
              myCryptoPort
            </Link>
          </NavItem>
          <NavItem>
            <Link 
              to='/dashboard' 
              className='nav-link text-light' 
              className={`link-dash-1${location.pathname === "/dashboard" ? '-active' : ''}`}
            >
              Dashboard
            </Link>
          </NavItem>
          <NavItem className='nav-history'>
            <Link to='/history' className='nav-link text-light' className={`link-dash-2${location.pathname === "/history" ? '-active' : ''}`}>
              History
            </Link>
          </NavItem>
        </div>

        <div className='d-flex'>
          {/* Curreny dropdown menu */}
          <span onClick={handleClick1} className='menu1-trigger1'>
            <img src={currency === 'USD' ? dollar : thai } alt='' width={20} height={20} />
            &nbsp;&nbsp;
            {currency} <i className='fas fa-caret-down m-2' />
          </span>
          <nav
            ref={dropdownRef1}
            className={`menu1 ${isActive1 ? "active" : "inactive"}`}
          >
            <ul>
              <li className='cur-name'>Select currency</li>
              <li
                className='li-01'
                onClick={(e) => {
                  setCurrency("USD");
                }}
              >
                <img
                  className='usd-currency'
                  src={dollar}
                  alt='dollar'
                  width={25}
                  height={25}
                />
                <label for='usd' id='input-private'>
                  USD
                </label>
              </li>
              <li
                className='li-02'
                onClick={(e) => {
                  setCurrency("THB");
                }}
              >
                <img
                  className='thai-currency'
                  src={thai}
                  alt='thai'
                  width={25}
                  height={25}
                />
                <label for='thb' id='input-private'>
                  THB
                </label>
              </li>
            </ul>
          </nav>

          {/* User dropdown menu */}
          <span onClick={handleClick2} className='menu2-trigger2'>
            <img
              className='img-private'
              src={userPic}
              height={40}
              width={40}
              alt=''
            />
          </span>
          <nav
            ref={dropdownRef2}
            className={`menu2 ${isActive2 ? "active" : "inactive"}`}
          >
            <ul>
              <li className='li-username'>
                Hello, {user.username.toUpperCase()}
              </li>
              {/* <hr/> */}
              <li className='li-1'>
                <a href='/setting'>
                  <i className='fas fa-cog' id='i-private' />
                  Setting
                </a>
              </li>
              <li className='li-2'>
                <div
                  className='logout-div'
                  role='button'
                  onClick={handleClickLogout}
                >
                  <i className='fas fa-sign-out-alt' id='i-private' />
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
