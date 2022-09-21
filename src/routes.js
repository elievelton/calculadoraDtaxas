import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

// hoks

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/userAuthentucation";

import Home from './pages/Home';
import Contato from './pages/Contato';
import Ofertas from './pages/Ofertas';
import Login from './pages/Login';
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import DashboardUser from "./pages/DashboardUser";
import CadastrarEmpresa from "./pages/CadastrarEmpresa";
import Admin from "./pages/Admin";

import { AuthProvider } from "./context/AuthContext";
//importando so componentes da página;
import Header from './components/Header';
import DashHeader from './components/DashHeader';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Fazendo as configurações das rotas do site

function RoutesApp(){
    const [user, setUser] = useState(undefined)
    const [isDash, setIsDash] = useState('')
    const {auth} = useAuthentication()
    const loadingUser = user === undefined

    useEffect(() =>{
        onAuthStateChanged(auth,(user) =>{
            setUser(user);
        })
    })
    React.useEffect(() => {
        setIsDash(window.location.pathname)
        // console.log(window.location.pathname)
        console.log(isDash)
    },[isDash])

    if(loadingUser) {
        return <p>Carregando...</p>
    }

    

    return (
        <AuthProvider value ={{user}}>
            <BrowserRouter>
        <div className="conteiner">
        {window.location.pathname.includes('/paineldecontrole') ? <DashHeader/> : <Header/>} 
        {/* <Navbar/> */}
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/contato' element = {<Contato/>}/>
                <Route path='/ofertas' element = {<Ofertas/>}/>
                <Route path='/login' element = {!user ?<Login/> : <Navigate to ="/"/>}/>
                <Route path='/sobre' element = {<Sobre/>}/>
                <Route path='/cadastro' element = {!user ?<Cadastro/> : <Navigate to ="/login"/>}/>
                <Route path='/paineldecontrole/*' element = {user ?<DashboardUser/> : <Navigate to ="/login"/>}/>
                <Route path='/admin/cadastrarempresa/' element = {<CadastrarEmpresa/>}/>
                <Route path='/admin/' element = {<Admin/>}/>
                


                
            </Routes>
        {!window.location.pathname.includes('/paineldecontrole') && <Footer/>}

            </div>
        
        </BrowserRouter>
        </AuthProvider>
    )
}
export default RoutesApp;