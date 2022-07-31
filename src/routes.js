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

import { AuthProvider } from "./context/AuthContext";


//importando so componentes da página;
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Fazendo as configurações das rotas do site

function RoutesApp(){
    const [user, setUser] = useState(undefined)
    const {auth} = useAuthentication()
    const loadingUser = user === undefined

    useEffect(() =>{
        onAuthStateChanged(auth,(user) =>{
            setUser(user);
        })
    })

    if(loadingUser) {
        return <p>Carregando...</p>
    }
    return (
        <AuthProvider value ={{user}}>
            <BrowserRouter>
        <div className="conteiner">
        <Header/>
        {/* <Navbar/> */}
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/contato' element = {<Contato/>}/>
                <Route path='/ofertas' element = {<Ofertas/>}/>
                <Route path='/login' element = {!user ?<Login/> : <Navigate to ="/"/>}/>
                <Route path='/sobre' element = {<Sobre/>}/>
                <Route path='/cadastro' element = {!user ?<Cadastro/> : <Navigate to ="/login"/>}/>
                <Route path='/paineldecontrole' element = {user ?<DashboardUser/> : <Navigate to ="/login"/>}/>


                
            </Routes>
        <Footer/>

            </div>
        
        </BrowserRouter>
        </AuthProvider>
    )
}
export default RoutesApp;