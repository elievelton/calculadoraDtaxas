import {FaBars, FaTimes, FaHome,FaEnvelope,FaFire,FaUserCircle,FaOutdent,FaSignOutAlt} from "react-icons/fa";
import {useRef} from "react";
import React from 'react';
import { NavLink } from "react-router-dom";
import {useAuthentication } from '../../hooks/userAuthentucation'
import {useAuthValue} from '../../context/AuthContext'


function Navbar() {
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    const {user} = useAuthValue();  
    const {logout} = useAuthentication();
    return(
        
        <header>
            <h3>Logo</h3>
            <nav  ref= {navRef}>
                <NavLink to="/"activeClassName="active"><FaHome size="1.8rem"/>Home</NavLink>
                <NavLink to="/sobre"activeClassName="active"><FaOutdent/>Sobre</NavLink>
                <NavLink to="/contato"activeClassName="active"><FaEnvelope/>Contato</NavLink>                
                <NavLink to="/ofertas"activeClassName="active"><FaFire/>Ofertas</NavLink>
                
                {!user&&(
                    <NavLink to="/login"activeClassName="active"><FaUserCircle/>Login/Cadastro</NavLink>
                )}
                {user&&(
                    <NavLink to="/paineldecontrole"activeClassName="active"><FaSignOutAlt/>DashboardUser</NavLink>
                )}

                {user&&(
                    
                        <button onClick={logout} className="sair">
                            Sair
                        </button>
                    
                )}
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        
    );
}
export default Navbar;