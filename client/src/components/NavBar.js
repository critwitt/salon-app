import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'


import "./NavBar.css"

function NavBar ({setUser, user}) {

    const history = useHistory()

    function logout () {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            setUser('')
            history.push('/')
        });
    }

    return (
        <div>
            <div className="header">
                <div className="info"><FontAwesomeIcon icon={faPhone} /> CALL NOW (908) 753-7717 | <FontAwesomeIcon icon={faEnvelope} /> FRONTDESK@FIORILLIHAIRDESIGN.COM</div>
                <div className="login">{user ? <NavLink className="login" exact to='/profile'>{`Welcome, ${user.name}`}</NavLink> : <NavLink className="login" exact to="/login">Login</NavLink>}</div>
                <div onClick={logout}>Logout</div>

            </div>
            <div className="navbar">
                <NavLink exact to="/">
                    <img className="nav-button" src="https://fiorillihairdesign.com/wp-content/uploads/2021/12/New_Logo_Fiorilli2-copy.jpg" />
                </NavLink>
                <NavLink className="nav-button" exact to="/">Home</NavLink>
                <NavLink className="nav-button" exact to="/about">About Us</NavLink>
                <NavLink className="nav-button" exact to="/services">Services</NavLink>
                <NavLink className="nav-button" exact to="/appointments">Book an appointment</NavLink>
            </div>

        </div>
    )
}

export default NavBar