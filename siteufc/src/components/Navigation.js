import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
  <div className="nav-bar header">
  <Logo />
    <div className="navigation">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <div className="navigation"> 
    <ul class="menu">
    <li><a href="#home"> <NavLink exact to="/" activeClassName="nav-active">
      Accueil
    </NavLink></a></li>
    <li><a href="#histoire">    <NavLink exact to="histoire" activeClassName="nav-active">
    Le club
    </NavLink></a></li>
    <li><a href="#membres">  <NavLink exact to="membres" activeClassName="nav-active">
    Adhérents
    </NavLink></a></li>
    <li><a href="#infos">     <NavLink exact to="infos" activeClassName="nav-active">
    Infos utiles
    </NavLink></a></li>
    <li><a href="#contact">     <NavLink exact to="contact" activeClassName="nav-active">
    Contact
    </NavLink></a></li>

    </ul>
    </div>
  </div>
  </div>
    );
};

export default Navigation;
