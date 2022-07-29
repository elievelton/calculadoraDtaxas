import { Link } from "react-router-dom";
import styles from '../Sobre/sobre.module.css';
function Sobre() {
    return(
        <div className={styles.Sobre}>
            <h2>Sobre o <span>Calculadora de taxas</span></h2>
            <p>Este Site foi criado com intuido de ajudar empreendedores a 
                decobrir qual máquina de cartão tem as menores taxas e melhores planos.

            </p>
            <Link className="btn" to= '/'>Calcular Taxas Agora</Link>
        </div>

    );
}
export default Sobre;