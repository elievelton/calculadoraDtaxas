import DashNavbar from '../../components/DashNavbar'
import styles from './Dashboard.module.css' 

import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import {FaUserAlt,FaRegFileAlt} from "react-icons/fa";
import Perfil from '../Perfil';
import Relatorio from '../Relatorio';


function DashboardUser() {
    const isAdm = true
    return(
        <div className={styles.container}>
            {isAdm ? (
                <DashNavbar>
                    <NavLink to="/paineldecontrole/user"><FaUserAlt size="1.8rem"/><span>Perfil</span></NavLink>
                    <NavLink to="/paineldecontrole/cadastrarempresa"><FaUserAlt size="1.8rem"/><span>Cadastrar Empresa</span></NavLink>
                    <NavLink to="/paineldecontrole/listar"><FaUserAlt size="1.8rem"/><span>Listar Empresas</span></NavLink>
                    
                </DashNavbar>
            ) : (<DashNavbar className={styles.navbar}>
                <NavLink to="/paineldecontrole/user"><FaUserAlt size="1.8rem"/><span>Perfil</span></NavLink>
                <NavLink to="/paineldecontrole/relatorio"><FaRegFileAlt/><span>Relatórios</span></NavLink>
            </DashNavbar>)}
            <Routes>
                <Route path='/' element={<Navigate to ="/paineldecontrole/user"/>}/>
                <Route path='/user' element={<Perfil className={styles.content}/>}/>
                <Route path='/relatorio' element={<Relatorio/>}/>
                <Route path='/cadastrarempresa' element={<Relatorio/>}/>
                <Route path='/listar' element={<Relatorio/>}/>
            </Routes>
            

        </div>

    );
}
export default DashboardUser;