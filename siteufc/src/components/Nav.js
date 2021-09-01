import React from "react";
import { NavLink } from "react-router-dom"

const Nav = () => {
    return(
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='nav-active'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="infos" activeClassName='nav-active'>
                            Informations utiles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='history' activeClassName='nav-active'>
                            Histoire 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='members' activeClassName='nav-active'>
                            Membres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='contacts' activeClassName='nav-active'>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='inscription' activeClassName='nav-active'>
                            Inscription
                        </NavLink>
                    </li>
                </ul>
            </div>
    );
};

export default Nav;