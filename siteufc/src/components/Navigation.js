
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="nav-bar">
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="/infos">
                Infos Utiles
            </NavLink>
            <NavLink exact to="/membres">
                Membres
            </NavLink>
            <NavLink exact to="/histoire">
                Histoire
            </NavLink>
            <NavLink exact to="/contact">
                Contact
            </NavLink>

            </div>
    )
}

export default Navigation
