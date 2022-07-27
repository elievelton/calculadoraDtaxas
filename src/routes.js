import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './pages/Home'
import Contato from './pages/Contato'
import Ofertas from './pages/Ofertas'
import Login from './pages/Login'

//importando so componentes da página
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Fazendo as configurações das rotas do site

function RoutesApp(){
    return (
        <BrowserRouter>
        <Header/>
        <Navbar/>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/contato' element = {<Contato/>}/>
                <Route path='/ofertas' element = {<Ofertas/>}/>
                <Route path='/login' element = {<Login/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default RoutesApp;