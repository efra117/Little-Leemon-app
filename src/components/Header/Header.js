import React from 'react'
import "./header.css";
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false)

  const toggleMenu=() =>{
    setActive(!active)
  }


  return (
    <header className="bottomborder">
      <img src={logo} alt="logo" width={"auto"} height={"50px"}></img>
      <nav>
        <div className="menu_icon">
          <i
            className="fa fa-bars menu"
            aria-hidden="true"
            onClick={toggleMenu}
          ></i>
        </div>
        <section className={active ? "slider active" : "slider"}>
          <ul id="menu">
            <div className="closed">
              <i
                className="fa fa-times close"
                aria-hidden="true"
                onClick={toggleMenu}
              ></i>
            </div>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/reservation">
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default Header