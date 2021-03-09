import React from 'react';
import logo from '../assets/images/Instagram-Logo.png';
import {
  IoHome,
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonCircleSharp } from "react-icons/io5";

const Navbar = ({ isLog, setIsLog }) => {

  const handleClick = () => {
    setIsLog(prevVal => !prevVal);
  }

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <form>
        <input type="search" placeholder="Search" className="navbar__search" />
      </form>
      <div className="navbar__icons">
        <span><IoHome /></span>
        <span><IoPaperPlaneOutline /></span>
        <span><IoCompassOutline /></span>
        <span><IoHeartOutline /></span>
        <span onClick={handleClick}><IoPersonCircleSharp /></span>
      </div>
    </div>
  )
}

export default Navbar;
