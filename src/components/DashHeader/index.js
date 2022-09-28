
import style from './Header.module.css'
import {FaUserCircle, FaCalculator} from "react-icons/fa";

import React from 'react';

import {useAuthentication } from '../../hooks/userAuthentucation'
import {useAuthValue} from '../../context/AuthContext'

function DashHeader() {

  const {user} = useAuthValue();  
  const {logout} = useAuthentication();
    return(
      <>
        <header className={style.header}>
          <a className={style.logo} href="/">
            <FaCalculator/>
            <h3>Calc<span>T</span></h3>
          </a>
          <a href="/paineldecontrole" className={style.user}><FaUserCircle></FaUserCircle></a>
          {/* {!user&&(
              <NavLink to="/login"activeClassName="active" className={style.item}><FaUserCircle/>Login/Cadastro</NavLink>
          )}
          {user&&(
              <NavLink to="/paineldecontrole"activeClassName="active"><FaSignOutAlt/>DashboardUser</NavLink>
          )}

          {user&&(
              
            <button onClick={logout} className="sair">
                Sair
            </button>
              
          )} */}
        </header>
        {/* <aside>
          <nav>
            <a href="">batata</a>
          </nav>
        </aside> */}
      </>

    );
}
export default DashHeader;