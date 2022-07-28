import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";


function Navbar() {
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        
        <header>
            <h3>Logo</h3>
            <nav ref= {navRef}>
                <a href="/">Home</a>
                <a href="/contato">Contato</a>
                <a href="/sobre">Sobre</a>
                <a href="/ofertas">Ofertas</a>
                <a href="/login">Login/Cadastro</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        
    );
}
export default Navbar;