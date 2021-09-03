import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="history" activeClassName="nav-active">
                Histoire
            </NavLink>
            <NavLink exact to="infos utiles" activeClassName="nav-active">
                Infos utiles
            </NavLink>
            <NavLink exact to="membre" activeClassName="nav-active">
                Membre
            </NavLink>
            <NavLink exact to="contact" activeClassName="nav-active">
                Contact
            </NavLink>
        </div>
    );
};

export default Navigation;