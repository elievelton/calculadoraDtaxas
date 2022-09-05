import DashNavbar from '../../components/DashNavbar'
import styles from './Dashboard.module.css' 

import { NavLink, Link, Route, Routes } from "react-router-dom";
import {FaBars, FaTimes, FaHome,FaEnvelope,FaFire,FaUserCircle,FaUserAlt,FaOutdent,FaRegFileAlt,FaSignOutAlt} from "react-icons/fa";
import Perfil from '../Perfil';
import Relatorio from '../Relatorio';

function DashboardUser() {
    return(
        <div className={styles.container}>
            <DashNavbar className={styles.navbar}>
                <NavLink to="/paineldecontrole"><FaUserAlt size="1.8rem"/><span>Perfil</span></NavLink>
                <NavLink to="/paineldecontrole/relatorio"><FaRegFileAlt/><span>Relatórios</span></NavLink>
            </DashNavbar>
            <Routes>
                <Route path='/' element={<Perfil/>}/>
                <Route path='/relatorio' element={<Relatorio/>}/>
            </Routes>
            

        </div>

    );
}
export default DashboardUser;