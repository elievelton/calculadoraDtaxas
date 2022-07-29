import styles from '../Footer/Footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <h3 id="copy">Calculadora de taxas</h3>
            <p id="copy" >@Direitos reservados Calculadora de taxas &copy;2022</p>
        </footer>

    );
}
export default Footer;