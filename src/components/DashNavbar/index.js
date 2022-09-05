import {FaBars, FaTimes, FaHome,FaEnvelope,FaFire,FaUserCircle,FaOutdent,FaSignOutAl,FaTrash} from "react-icons/fa";
import {useRef} from "react";
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import {useAuthentication } from '../../hooks/userAuthentucation'
import {useAuthValue} from '../../context/AuthContext'
import styles from './Navbar.module.css'
import { style } from "@mui/system";
// import style2 from '../Header/Header.module.css'


function DashNavbar({className, children}) {
    const [resp,setResp] = React.useState(false)
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle(styles['responsive_nav']);
    }

    function handleResize(params) {
        const width = window.innerWidth
        if (width <= 1024){
            setResp(true)
        }else{
            setResp(false)
        }
    }

    React.useEffect(() => {
        handleResize()
    },[])
    

    const {user} = useAuthValue();  
    const {logout} = useAuthentication();
    // console.log(resp)
    return(
        
        <>
            <nav  ref= {navRef} className={`${className} ${styles.nav}`}>
                <div className={styles.items}>
                    {children}
                </div>
                <div className={styles.items}>
                    <a href="#" className={styles.delete}><FaTrash  className={styles.lixo}/> Excluir conta</a>
                    <button onClick={logout} className={styles.sair}>
                        Sair
                    </button>
                    
                </div>
                
            </nav>
            {/* {!user&& !resp &&(
                    <NavLink to="/login"><FaUserCircle/><span>Login/Cadastro</span></NavLink>
            )}
            {user&& !resp &&(
                <NavLink to="/paineldecontrole"><FaSignOutAlt/>DashboardUser</NavLink>
            )}

            {user&& !resp &&(
                
                    <button onClick={logout} className={styles.sair}>
                        Sair
                    </button>
                
            )} */}
        </>
        
    );
}
export default DashNavbar;