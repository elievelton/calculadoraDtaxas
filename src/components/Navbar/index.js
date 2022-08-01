import {FaBars, FaTimes, FaHome,FaEnvelope,FaFire,FaUserCircle,FaOutdent,FaSignOutAlt} from "react-icons/fa";
import {useRef} from "react";
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import {useAuthentication } from '../../hooks/userAuthentucation'
import {useAuthValue} from '../../context/AuthContext'
import styles from './Navbar.module.css'
// import style2 from '../Header/Header.module.css'


function Navbar() {
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle(styles['responsive_nav']);
    }

    const {user} = useAuthValue();  
    const {logout} = useAuthentication();
    return(
        
        <>
            <nav  ref= {navRef} className={styles.nav}>
                <NavLink to="/"><FaHome size="1.8rem"/><span>Home</span></NavLink>
                <NavLink to="/sobre"><FaOutdent/><span>Sobre</span></NavLink>
                <NavLink to="/contato"><FaEnvelope/><span>Contato</span></NavLink>                
                <NavLink to="/ofertas"><FaFire className={styles.fire}/><span>Ofertas</span></NavLink>
                {!user&&(
                    <NavLink to="/login"><FaUserCircle/><span>Login/Cadastro</span></NavLink>
                )}
                {user&&(
                    <NavLink to="/paineldecontrole"><FaSignOutAlt/>DashboardUser</NavLink>
                )}

                {user&&(
                    
                        <button onClick={logout} className={styles.sair}>
                            Sair
                        </button>
                    
                )}
                
                <button  className={`${styles['nav-btn']} ${styles['nav-close-btn']}`} onClick={showNavbar}>
                    <FaTimes size="1.8rem"/>
                </button>
                
            </nav>
            <button className={styles['nav-btn']} onClick={showNavbar}>
                <FaBars size="1.8rem"/>
            </button>
        </>
        
    );
}
export default Navbar;