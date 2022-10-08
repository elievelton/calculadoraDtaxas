import DashNavbar from '../../components/DashNavbar'
import styles from './Dashboard.module.css' 
import { useAuthentication } from "../../hooks/userAuthentucation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { NavLink, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {FaUserAlt,FaRegFileAlt,FaClipboardList,FaWpforms} from "react-icons/fa";
import Perfil from '../Perfil';
import Relatorio from '../Relatorio';
import CadEmpresa from '../CadEmpresa';
import ListarEmpresas from '../ListarEmpresas';
import ListarPlanos from '../ListarPlanos';
import CadPlano from '../CadPlano';
import EditPlano from '../EditPlano';
import EditEmpresa from '../EditEmpresa';
import ErrorN from '../ErrorN';


function DashboardUser() {
    //hook usado para pegar a informação de quem está logado
    const {auth } = useAuthentication();

    const [userCorrente, setuserCorrente] = useState("");
    const adm1 = "IndzODiLpaWm8h87kjgyy1gdx882"
    const adm2 = "4kB7F7MWIvhdqQOERhyqaJtgtJz1"
    let isAdm = false;
   
    
    useEffect(() => {
        setuserCorrente(auth.currentUser.uid);
    }, []);
    

    console.log(userCorrente);
    
    
     

        function refreshPage(){ 
          window.location.reload(); 
        }

        if(userCorrente === adm1 || userCorrente === adm2){
            isAdm = true
            refreshPage();
        }
    
    return(
        <>
        
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
                <Route path='/error' element={<ErrorN className={styles.content}/>}/>
                <Route path='/user' element={<Perfil className={styles.content}/>}/>
                <Route path='/relatorio' element={<Relatorio/>}/>
                <Route path='/cadastrarempresa' element={isAdm ?<CadEmpresa className={styles.content} /> : <Navigate to ="/paineldecontrole/error" refresh="true" />}/>
                <Route path='/listar' element={isAdm ? <ListarEmpresas className={styles.content}/>: <Navigate to ="/paineldecontrole/error"  />}/>
                <Route path='/listar/edit' element={isAdm?<EditEmpresa className={styles.content}/>: <Navigate to ="/paineldecontrole/error"  />}/>
                <Route path='/listar/planos' element={isAdm? <ListarPlanos className={styles.content}/>: <Navigate to ="/paineldecontrole/error"  />}/>
                <Route path='/listar/planos/edit' element={isAdm?<EditPlano className={styles.content}/>: <Navigate to ="/paineldecontrole/error"  />}/>
                <Route path='/listar/cadastrarplano' element={isAdm?<CadPlano className={styles.content}/>: <Navigate to ="/paineldecontrole/error"  />}/>
            </Routes>
            

        </div>
        
</>
    );
}
export default DashboardUser;