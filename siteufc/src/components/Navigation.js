import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Logo />

      <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="histoire" activeClassName="nav-active">
          Histoire
        </NavLink>
        <NavLink exact to="infos" activeClassName="nav-active">
          Infos utiles
        </NavLink>
        <NavLink exact to="membres" activeClassName="nav-active">
          Membres
        </NavLink>
        <NavLink exact to="contact" activeClassName="nav-active">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
