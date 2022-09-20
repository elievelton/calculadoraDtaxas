import styles from "../Home/home.module.css";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// import Box from "@mui/material/Box";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import AwesomeSlider from "react-awesome-slider";
import { FaCheckCircle } from "react-icons/fa";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { fetchDocuments } from "../../hooks/useFetchDocuments";

function Home() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [pessoa, setPessoa] = useState("cpf");
  const [venda, setVenda] = useState("credito");
  const [empresa, setEmpresa] = useState("escolha");
  const [parcela, setParcela] = useState("À vista");
  const [valor, setValor] = useState("");
  const planos = null;
  const empresas = ["Ton", "Mercado Pago", "SumUp"];
  const parcelas = [
    "À vista",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
    "11x",
    "12x",
  ];
  //busca no banco de dados do firebase
  // const empresaCollectionRef = collection(db, "empresas");
  // const planoCollectionRef = collection(db, "planos");
  // const taxaCollectionRef = collection(db, "taxas");
  // useEffect(() => {
  //   const getEmpresas= async () => {
  //     const lista_empresas = await getDocs(empresaCollectionRef);
  //     const lista_planos = await getDocs(planoCollectionRef);
  //     const lista_taxas = await getDocs(taxaCollectionRef);
  //     console.log(lista_empresas.docs.map((doc=>({...doc.data(), id: doc.id}))))
  //     console.log(lista_planos.docs.map((doc=>({...doc.data(), id: doc.id}))))
  //     console.log(lista_taxas.docs.map((doc=>({...doc.data(), id: doc.id}))))
  //   };
  //   getEmpresas();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/static/maquinas.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  //buscando os dados do banco de dados atualizado Firebase
  const { documents: buscaempresas } = fetchDocuments("empresas");

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  function setActivePessoa({ target }) {
    setPessoa(target.id);
  }
  function setActiveVenda({ target }) {
    setVenda(target.id);
  }

  if (!data || !data.length) return null;

  return (
    <>
      <div className={styles.boxbanner}>
        <div className={styles.banner}>
          <AwesomeSlider className={styles.slider} animation="cubeAnimation">
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/1200x630-maquina-cartoes.jpg" />
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/capa-1-1280x720-1.jpg" />
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/rede-pos-cielo-movel-banda-feat-br-1000x542-4.jpg" />
          </AwesomeSlider>
        </div>
      </div>
      <div className="container">
        <div className={styles.titulocalculadora}>
          <h2>Calculadora de taxa</h2>
        </div>
        <div className={styles.calculadora}>
          <div className={styles.boxcalculadora}>
            <div className={styles.data}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}>
                <div className={styles.opcoes}>
                  <button
                    className={pessoa === "cpf" ? styles.btnActive : ""}
                    id="cpf"
                    onClick={setActivePessoa}>
                    Pessoa Física
                  </button>
                  <button
                    className={pessoa === "cnpj" ? styles.btnActive : ""}
                    id="cnpj"
                    onClick={setActivePessoa}>
                    Pessoa Jurídica
                  </button>
                </div>
                <label htmlFor="empresa">Escolha a empresa:</label>
                <select
                  value={empresa}
                  onChange={({ target }) => {
                    setEmpresa(target.value);
                  }}>
                  <option value="escolha" disabled>
                    Escolha a empresa
                  </option>
                  {empresas &&
                    empresas.map((empresa) => {
                      return <option key={empresa}>{empresa}</option>;
                    })}
                </select>
                <label>Escolha o plano:</label>
                {planos &&
                  planos.map((plano) => {
                    return (
                      <button key={plano} className={styles.planButton}>
                        {plano}
                      </button>
                    );
                  })}
                {!planos && (
                  <button
                    className={`${styles.planButton} ${styles.buttonDisabled}`}>
                    Escolha a empresa
                  </button>
                )}
                <label htmlFor="tipovenda">Tipo de venda:</label>
                <div className={styles.opcoes}>
                  <button
                    className={venda === "credito" ? styles.btnActive : ""}
                    id="credito"
                    onClick={setActiveVenda}>
                    Crédito
                  </button>
                  <button
                    className={venda === "debito" ? styles.btnActive : ""}
                    id="debito"
                    onClick={setActiveVenda}>
                    Débito
                  </button>
                </div>
                <label htmlFor="valor">Valor da venda:</label>
                <input
                  type="text"
                  name="valor"
                  id="valor"
                  placeholder="ex: R$ 4257,89"
                  value={valor}
                  onChange={({ target }) => {
                    setValor(target.value);
                  }}
                />
                <label htmlFor="parcelamento">Parcelamento:</label>
                <select
                  value={parcela}
                  onChange={({ target }) => {
                    setParcela(target.value);
                  }}>
                  {parcelas.map((parcela) => {
                    return (
                      <option value={parcela} key={parcela}>
                        {parcela}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>
            <div className={styles.result}>
              <div className={styles.recebe}>
                <p>Você recebe:</p>
                <h3>
                  <span>R$ 4856,32</span>
                </h3>
              </div>
              <div className={styles.taxa}>
                <p className={styles.titulo}>Taxa Aplicada:</p>
                <p>
                  <span>2,87%</span>
                </p>
              </div>
              <div className={styles.desconto}>
                <p className={styles.titulo}>Desconto Aplicado:</p>
                <span>R$ 154,68</span>
              </div>
              <div className={styles.melhor}>
                <p>
                  <FaCheckCircle />
                  Melhor taxa no crédito
                </p>
                <p>
                  <FaCheckCircle />
                  Nota 9.4 no reclame aqui
                </p>
              </div>
              <button className={styles.comprar}>Peça já a sua</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="logo">
          <h2>Principais ofertas</h2>
        </div>
        <center>
          <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const { id, nome, price, oldPrice, image } = item;
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image} alt={nome} />
                  </div>
                  <div className="info">
                    <span className="nome">{nome}</span>
                    <span className="oldPrice">R$ {oldPrice}</span>
                    <div className="bt-centro">
                      <NavLink to="/ofertas" end>
                        <button className="bt">R$ {price}</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </center>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="/static/images/image-1.png" alt="Scroll Left" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/static/images/image-1.png" alt="Scroll Right" />
          </button>
        </div>

        {/*testando a recuperação dos dados
          Aqui é para mostrar os nomes das empresas na tela home 
        */}
        {buscaempresas.map((buscaempresas) => (
          <h2>{buscaempresas.nome}</h2>
        ))}



      </div>
    </>
  );
}
export default Home;
