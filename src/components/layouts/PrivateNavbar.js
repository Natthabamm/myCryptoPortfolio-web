import React from "react";
import { useRef } from "react";
import { useDetectOutsideClick } from "../../services/useDetectOutsideClick";
import '../../styles/Header.css'
import { Nav,NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import userPic from '../../pics/profileImg.png'

const Header = () => {
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [isActive1, setIsActive1] = useDetectOutsideClick(dropdownRef1, false);
  const [isActive2, setIsActive2] = useDetectOutsideClick(dropdownRef2, false);
  const handleClick1 = () => setIsActive1(!isActive1);
  const handleClick2 = () => setIsActive2(!isActive2);


  return (
    <div>
      <Nav className='navbar navbar-dark bg-dark'>
        <div className="d-flex justify-content ms-4">
          <NavItem>
            <Link to="/" className="navbar-brand">myCryptoPort</Link>
          </NavItem>
          <NavItem>
            <Link to="/dashbord" className="nav-link text-light">Dashbord</Link>
          </NavItem>
          <NavItem>
            <Link to="/history" className="nav-link text-light">History</Link>
          </NavItem>
        </div>

        <div className="d-flex">
        {/* Curreny dropdown menu */}
        <span onClick={handleClick1} className='menu-trigger1'>
            USD <i className="fas fa-caret-down m-2" />
        </span>
        <nav
            ref={dropdownRef1}
            className={`menu1 ${isActive1 ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <input type="radio" id="usd" name="currency" value="USD" />
                <label for="usd">
                    {/* <i className="fas fa-dollar-sign" /> */}
                    USD
                </label>
              </li>
              <li>
                <input type="radio" id="thb" name="currency" value="THB" />
                <label for="thb">THB</label>
              </li>
            </ul>
          </nav>
        
        {/* User dropdown menu */}
          <span onClick={handleClick2} className='menu-trigger1'>
            <img src={userPic} height={30} width={30} alt=""/>
          </span>
          <nav
            ref={dropdownRef2}
            className={`menu ${isActive2 ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href='/setting'>
                    <i className="fas fa-cog" />
                    Setting
                </a>
              </li>
              <li>
                <a href='/logout'>
                    <i className="fas fa-sign-out-alt" />
                    Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
