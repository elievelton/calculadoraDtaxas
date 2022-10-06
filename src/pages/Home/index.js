import styles from "../Home/home.module.css";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// import Box from "@mui/material/Box";
import React from "react";


import AwesomeSlider from "react-awesome-slider";
import { FaCheckCircle } from "react-icons/fa";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [data, setData] = useState([]);
  const [dataPlanos, setDataPlanos] = useState([]);
  const carousel = useRef(null);
  const [pessoa, setPessoa] = useState(0);
  const [venda, setVenda] = useState("");
  const [empresa, setEmpresa] = useState([]);
  const [parcela, setParcela] = useState("À vista");
  const [valor, setValor] = useState(null);
  const [selecionarEmpresa, setSelecionarEmpresa] = useState("");
  const [buscaPlano, setBuscaPlano] = useState([]); // buscar planos
  const [valorAtualizado, setValorAtualizado] = useState(0);
  const [taxaAplicada, setTaxaAplicada] = useState(0); // taxa que foi aplicada
  const [descontoAplicado, setDescontoAplicado] = useState(0); // desconto que foi aplicada
  const [notaReclameAqui, setNotaReclameAqui] = useState(0); // Nota do reclame aqui
  const [melhorEmQue, setMelhorEmQue] = useState("Sem Destaques")
  const [bannerUrl, setBannerUrl] = useState("https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg"); // url da máquinas de cartões
  const[link, setLink] = useState("#");
  const [selectPlano, setSelectPlano] = useState(""); // estado dos plano selecionado

  const [parcelamentodoPlano, setParcelamentodoPlano] = useState([]); // taxas do parcelamento

  // const empresas = ["Ton", "Mercado Pago", "SumUp"];
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
  

  // busca no banco de dados do firebase
  const empresaCollectionRef = collection(db, "empresas");
  const planoCollectionRef = collection(db, "planos");

  useEffect(() => {
    const getEmpresas = async () => {
      const lista_empresas = await getDocs(empresaCollectionRef);
      const lista_planos = await getDocs(planoCollectionRef);

      setEmpresa(
        lista_empresas.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setDataPlanos(
        lista_planos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getEmpresas();
  }, []);

  // função para calcular as taxas 
  function calculandotaxas([venda, valor, parcela, parcelamentodoPlano]) {
    
    let valo = 0;
    valo = valo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    let val = 0;
    val = val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    let taxaAtual = 0;
    
    let desconto = 0;
    desconto =  desconto.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    let desc = 0;
    desc =  desc.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    //falta terminar o recebimento de 15 e 30 dias
    let calc = parcelamentodoPlano[0];
    let calc1 = parcelamentodoPlano[1];
    let calc2 = parcelamentodoPlano[2];

    if (venda === "debito") {
      valo = ((100 * valor) * (100 - calc[0]))/10000;
      
      val = valo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      taxaAtual = calc[0];
      
      desc = valo - valor;
      desconto = desc.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
    if (venda === "credito") {
      if (parcela === "À vista") {
        valo = ((100 * valor) * (100 - calc[1]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        console.log(calc[1]);
        taxaAtual = calc[1];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "2x") {
        valo = ((100 * valor) * (100 - calc[2]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[2];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "3x") {
        valo = ((100 * valor) * (100 - calc[3]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[3];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "4x") {
        valo = ((100 * valor) * (100 - calc[4]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[4];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "5x") {
        valo = ((100 * valor) * (100 - calc[5]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[5];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "6x") {
        valo = ((100 * valor) * (100 - calc[6]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[6];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "7x") {
        valo = ((100 * valor) * (100 - calc[7]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[7];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "8x") {
        valo = ((100 * valor) * (100 - calc[8]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[8];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "9x") {
        valo = ((100 * valor) * (100 - calc[9]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[9];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "10x") {
        valo = ((100 * valor) * (100 - calc[10]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[10];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "11x") {
        valo = ((100 * valor) * (100 - calc[11]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[11];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      else if (parcela === "12x") {
        valo = ((100 * valor) * (100 - calc[12]))/10000;
        val = valo.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        taxaAtual = calc[12];
        desc = valo - valor;
        desconto = desc.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      
      
    }
    setValorAtualizado(val);
    setTaxaAplicada(taxaAtual);
    setDescontoAplicado(desconto);
  }

  
//Algumas filtragens
  const BuscaPlanoFiltro = () => {
    const data = dataPlanos.filter((plano) =>
      plano.reference.startsWith(selecionarEmpresa.toLowerCase())
    );
    setBuscaPlano(data);
  };
  const buscaEmpresaFiltro = () => {
    empresa.filter(person => person.chave ===selecionarEmpresa).map(filteredPerson => (
      setNotaReclameAqui(filteredPerson.notaReclameAqui),
      setBannerUrl(filteredPerson.bannerUrl),
      setLink(filteredPerson.link)
    ))
    
  };
  const buscaMelhorEmQue = () => {
    empresa.filter(person => person.chave ===selecionarEmpresa).map(filteredPerson => (
      setMelhorEmQue(filteredPerson.melhoremque)
    ))
    
  };

  

  const setPlan = (e) => {
    setSelectPlano(e.nome);
    const lista1 = Object.values(e.recebimento1)
    const lista2 = Object.values(e.recebimento15)
    const lista3 = Object.values(e.recebimento30)
    setParcelamentodoPlano([lista1, lista2, lista3]);
    setPessoa(e.tipo);
    console.log("Lista1", lista1)
  };

  useEffect(() => {
    BuscaPlanoFiltro();
    buscaEmpresaFiltro();
    buscaMelhorEmQue();
  }, [selecionarEmpresa]);

  useEffect(() => {
    fetch("http://localhost:3000/static/maquinas.json")
      .then((response) => response.json())
      .then(setData);
  }, []);



  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  
  function setActiveVenda({ target }) {
    setVenda(target.id);
  }
  //observador da função de calculo
  useEffect(() => {
    calculandotaxas([venda, valor, parcela, parcelamentodoPlano]);
  }, [venda,link,bannerUrl,valor, parcela, parcelamentodoPlano]);

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
                
                <label htmlFor="empresa">Escolha a empresa:</label>
                <select
                  value={selecionarEmpresa}
                  onChange={({ target }) => {
                    setSelecionarEmpresa(target.value);
                  }}>
                  <option value="escolha" active ="True">
                    Escolha a empresa
                  </option>
                  {empresa &&
                    empresa.map((empre) => {
                      return <option key={empre.id}>{empre.chave}</option>;
                    })}
                </select>

                <label>Escolha o plano:</label>
                <div>
                  {buscaPlano &&
                    buscaPlano?.map((plan) => {
                      return (
                        
                        <button
                          key={plan.id}
                          value={selectPlano}
                          onClick={() => setPlan(plan)}
                          className={
                            selectPlano === plan.nome ? styles.btnActive : ""
                          }>
                          {plan.nome}
                        </button>
                        
                      );
                    })}
                    
                </div>
                <label htmlFor="tipovenda">Plano Para:</label>
                <div className={styles.opcoes}>
                  <button
                    className={pessoa == 0 ? styles.btnActive : ""}
                    id="cpf">
                    Pessoa Física
                  </button>
                  <button
                    className={pessoa == 1 ? styles.btnActive : ""}
                    id="cnpj">
                    Pessoa Jurídica
                  </button>
                </div>

                {!buscaPlano && (
                  <button
                    className={`${styles.planButton} ${styles.buttonDisabled}`}>
                    Escolha a empresa
                  </button>
                )}
                <label htmlFor="tipovenda">Escolha o tipo de venda:</label>
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
                
                <label className = {styles.labelValor}htmlFor="valor">Valor da venda:</label>
                
                <input
                  className={styles.inputcifrao}
                  type="number"
                  name="valor"
                  id="valor"
                  min="0"
                  placeholder="ex: R$ 4257,89"
                  
                  value = {valor}
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
                  <span>{valorAtualizado}</span>
                </h3>
              </div>
              <div className={styles.taxa}>
                <p className={styles.titulo}>Taxa Aplicada:</p>
                <p>
                  <span>{taxaAplicada}%</span>
                </p>
              </div>
              <div className={styles.desconto}>
                <p className={styles.titulo}>Valor da Taxa:</p>
                <span>{descontoAplicado}</span>
              </div>
              <div className={styles.melhor}>
                <p>
                  <FaCheckCircle />
                  {melhorEmQue}
                </p>
                <p>
                  <FaCheckCircle />
                  Nota {notaReclameAqui} no reclame aqui
                </p>
          <div className={styles.container}>
            <div className={styles.containerImg}>
                <img className = {styles.imgmaquininha} src ={bannerUrl} ></img>
                </div>
                <div>
              <div className={styles.posicaobnt} >
              <a href={link} target="_blank">
              <button className={styles.btn}>Adquirir Máquina</button>
              </a>
              </div>
              </div>
              </div>
            </div>
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
      </div>
    </>
  );
}
export default Home;
