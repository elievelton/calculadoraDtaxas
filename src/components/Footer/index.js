import styles from '../Footer/Footer.module.css';
import {FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaCalculator} from "react-icons/fa";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.foot}>
                <a className={styles.logo} href="/">
                    <FaCalculator/>
                    <h3>Calc<span>T</span></h3>
                </a>
                <div className={styles.sociaisContainer}>
                    <h3>Redes Sociais</h3>
                    <ul className={styles.sociais}>
                        <li>
                            <a href="/" className={styles.instagram}>
                                <FaInstagram/>
                            </a>
                        </li>
                        <a href="/" className={styles.twitter}>
                            <li><FaTwitter/></li>
                        </a>
                        <a href="/" className={styles.facebook}>
                            <li><FaFacebook/></li>
                        </a>
                        <a href="/" className={styles.youtube}>
                            <li><FaYoutube/></li>
                        </a>
                    </ul>
                </div>
            </div>
            <p id="copy" className={styles.center} >@Direitos reservados Calculadora de taxas &copy;2022</p>
        </footer>

    );
}
export default Footer;