import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './header.scss';

const NavBar = () => (
  <>
    <img className="logoImage" src={logo} alt="logo" />
    <h2 className="header-title"> LV`s ST Hub </h2>

    <ul>
      <NavLink to="/Missions" className="Missions">Missions</NavLink>
      <NavLink to="/Rockets" className="Rockets">Rockets</NavLink>
      <NavLink to="/MyProfile" className="Profile">My Profile</NavLink>
    </ul>
  </>
);

export default NavBar;
