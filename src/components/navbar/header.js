import React, { Fragment} from 'react';
import logo from '../../images/logo.png'
import './header.css';

const Header = () => {
    return (
        <Fragment>
            <img className="logoImage" src={logo} alt="logo" />
            <h2 className="header-title"> LV`s ST Hub </h2>
  
          <ul>
            <li>Missions</li>
            <li>Rockets</li>
            <li>My Profile</li>
          </ul>
  
       
        </Fragment>
    );
}

export default Header;