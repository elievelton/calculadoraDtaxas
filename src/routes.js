import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Home from './pages/Home';
import Contato from './pages/Contato';
import Ofertas from './pages/Ofertas';
import Login from './pages/Login';
import Sobre from "./pages/Sobre";


//importando so componentes da página;
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Fazendo as configurações das rotas do site

function RoutesApp(){
    return (
        <BrowserRouter>
        <div className="conteiner">
        <Header/>
        <Navbar/>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/contato' element = {<Contato/>}/>
                <Route path='/ofertas' element = {<Ofertas/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/sobre' element = {<Sobre/>}/>
                
            </Routes>
        <Footer/>

            </div>
        
        </BrowserRouter>
    )
}
export default RoutesApp;