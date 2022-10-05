import DashNavbar from '../../components/DashNavbar'
import styles from './Dashboard.module.css' 

import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import {FaUserAlt,FaRegFileAlt,FaClipboardList,FaWpforms} from "react-icons/fa";
import Perfil from '../Perfil';
import Relatorio from '../Relatorio';
import CadEmpresa from '../CadEmpresa';
import ListarEmpresas from '../ListarEmpresas';
import ListarPlanos from '../ListarPlanos';
import CadPlano from '../CadPlano';
import EditPlano from '../EditPlano';
import EditEmpresa from '../EditEmpresa';


function DashboardUser() {
    const isAdm = true
    return(
        <div className={styles.container}>
            {isAdm ? (
                <DashNavbar>
                    <NavLink to="/paineldecontrole/user"><FaUserAlt size="1.5rem"/><span>Perfil</span></NavLink>
                    <NavLink to="/paineldecontrole/cadastrarempresa"><FaWpforms size="1.5rem"/><span>Cadastrar Empresa</span></NavLink>
                    <NavLink to="/paineldecontrole/listar"><FaClipboardList size="1.5rem"/><span>Listar Empresas</span></NavLink>
                    
                </DashNavbar>
            ) : (<DashNavbar className={styles.navbar}>
                <NavLink to="/paineldecontrole/user"><FaUserAlt size="1.8rem"/><span>Perfil</span></NavLink>
                <NavLink to="/paineldecontrole/relatorio"><FaRegFileAlt/><span>Relatórios</span></NavLink>
            </DashNavbar>)}
            <Routes>
                <Route path='/' element={<Navigate to ="/paineldecontrole/user"/>}/>
                <Route path='/user' element={<Perfil className={styles.content}/>}/>
                <Route path='/relatorio' element={<Relatorio/>}/>
                <Route path='/cadastrarempresa' element={<CadEmpresa className={styles.content}/>}/>
                <Route path='/listar' element={<ListarEmpresas className={styles.content}/>}/>
                <Route path='/listar/edit' element={<EditEmpresa className={styles.content}/>}/>
                <Route path='/listar/planos' element={<ListarPlanos className={styles.content}/>}/>
                <Route path='/listar/planos/edit' element={<EditPlano className={styles.content}/>}/>
                <Route path='/listar/cadastrarplano' element={<CadPlano className={styles.content}/>}/>
            </Routes>
            

        </div>

    );
}
export default DashboardUser;