import React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import style from "./CadPlano.module.css";
import { useInsertDocument } from "../../hooks/insertEmpresa";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { DashFooter } from "../../components/DashFooter";

const CadPlano = ({ className }) => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(null);
  const [reference, setReference] = useState("");
  const empresaRef = localStorage.getItem("empresa");

  const [um, setUm] = useState(false);
  const [quinze, setQuinze] = useState(false);
  const [trinta, setTrinta] = useState(false);

  const [recebimento11, setrecebimento11] = useState({
    debito: "",
    avista: "",
    "2x": "",
    "3x": "",
    "4x": "",
    "5x": "",
    "6x": "",
    "7x": "",
    "8x": "",
    "9x": "",
    "10x": "",
    "11x": "",
    "12x": "",
  });
  const [recebimento151, setrecebimento151] = useState({
    avista: "",
    "2x": "",
    "3x": "",
    "4x": "",
    "5x": "",
    "6x": "",
    "7x": "",
    "8x": "",
    "9x": "",
    "10x": "",
    "11x": "",
    "12x": "",
  });
  const [recebimento301, setrecebimento301] = useState({
    avista: "",
    "2x": "",
    "3x": "",
    "4x": "",
    "5x": "",
    "6x": "",
    "7x": "",
    "8x": "",
    "9x": "",
    "10x": "",
    "11x": "",
    "12x": "",
  });

  const [errorForm, setErrorForm] = React.useState("");
  //Hook responsável por inseirir os dados no Banco de dados
  const { insertDocument, response } = useInsertDocument("planos");

  function limpaDados() {
    setNome("");
    setTipo(null);
    setrecebimento11({
      debito: "",
      avista: "",
      "2x": "",
      "3x": "",
      "4x": "",
      "5x": "",
      "6x": "",
      "7x": "",
      "8x": "",
      "9x": "",
      "10x": "",
      "11x": "",
      "12x": "",
    });
    setrecebimento151({
      debito: "",
      avista: "",
      "2x": "",
      "3x": "",
      "4x": "",
      "5x": "",
      "6x": "",
      "7x": "",
      "8x": "",
      "9x": "",
      "10x": "",
      "11x": "",
      "12x": "",
    });
    setrecebimento301({
      debito: "",
      avista: "",
      "2x": "",
      "3x": "",
      "4x": "",
      "5x": "",
      "6x": "",
      "7x": "",
      "8x": "",
      "9x": "",
      "10x": "",
      "11x": "",
      "12x": "",
    });
    setUm(!um);
  }

  //notificação de cadastro de empresa
  const notify = () =>
    toast.success("Plano cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    setReference(empresaRef.toLowerCase());
  }, [nome]);

  //Função de enviar o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm("");
    let recebimento1 = Object.values(recebimento11);
    let recebimento15 = Object.values(recebimento151);
    let recebimento30 = Object.values(recebimento301);
    console.log("Recebimento11 ", recebimento1);
    console.log("Recebimento15 ", recebimento15);
    console.log("Recebimento30 ", recebimento30);

    insertDocument({
      nome,
      tipo,
      reference,
      recebimento1,
      recebimento15,
      recebimento30,
    });
    notify();
    limpaDados();
  };
  

  return (
    <>
      <div className={`${style.cadplanos} ${className}`}>
        <h2>
          Cadastrar Plano (<span>{localStorage.getItem("empresa")}</span>)
        </h2>
        <form action="" className={style.plano}>
          <div className={style.mainInfo}>
            <label htmlFor="name">
              Nome do plano:
              <input
                type="text"
                name="name"
                id="name"
                value={nome}
                onChange={({ target }) => {
                  setNome(target.value);
                }}
              />
            </label>
            <label htmlFor="tipo">
              Tipo:
              <input
                type="number"
                name="tipo"
                id="tipo"
                required
                placeholder="Ex: 0-CPF / 1-CNPJ"
                value={tipo}
                onChange={({ target }) => {
                  setTipo(target.value);
                }}
              />
            </label>

            <div className={style.recebimentosBox}>
              <input
                type="checkbox"
                name="recebimento"
                id="1d"
                checked={um}
                onChange={() => {
                  setUm(!um);
                }}
              />
              <label htmlFor="1d">1 Dia</label>
              <input
                type="checkbox"
                name="recebimento"
                id="15d"
                checked={quinze}
                onChange={() => {
                  setQuinze(!quinze);
                }}
              />
              <label htmlFor="15d">15 Dias</label>
              <input
                type="checkbox"
                name="recebimento"
                id="30d"
                checked={trinta}
                onChange={() => {
                  setTrinta(!trinta);
                }}
              />
              <label htmlFor="30d">30 Dias</label>
            </div>
          </div>
          <div className={style.recebimentos}>
            {um && (
              <div>
                <h3>Taxas para 1 dia</h3>
                <label htmlFor="debito">
                  Debito:
                  <input
                    type="number"
                    name="debito"
                    id="debito"
                    value={recebimento11["debito"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        debito: target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="avista1">
                  À vista:
                  <input
                    type="number"
                    name="avista1"
                    id="avista1"
                    value={recebimento11["avista"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        avista: target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="2x1">
                  2x:
                  <input
                    type="number"
                    name="2x1"
                    id="2x1"
                    value={recebimento11["2x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "2x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="3x1">
                  3x:
                  <input
                    type="number"
                    name="3x1"
                    id="3x1"
                    value={recebimento11["3x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "3x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="4x1">
                  4x:
                  <input
                    type="number"
                    name="4x1"
                    id="4x1"
                    value={recebimento11["4x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "4x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="5x1">
                  5x:
                  <input
                    type="number"
                    name="5x1"
                    id="5x1"
                    value={recebimento11["5x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "5x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="6x1">
                  6x:
                  <input
                    type="number"
                    name="6x1"
                    id="6x1"
                    value={recebimento11["6x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "6x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="7x1">
                  7x:
                  <input
                    type="number"
                    name="7x1"
                    id="7x1"
                    value={recebimento11["7x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "7x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="8x1">
                  8x:
                  <input
                    type="number"
                    name="8x1"
                    id="8x1"
                    value={recebimento11["8x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "8x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="9x1">
                  9x:
                  <input
                    type="number"
                    name="9x1"
                    id="9x1"
                    value={recebimento11["9x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "9x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="10x1">
                  10x:
                  <input
                    type="number"
                    name="10x1"
                    id="10x1"
                    value={recebimento11["10x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "10x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="11x1">
                  11x:
                  <input
                    type="number"
                    name="11x1"
                    id="11x1"
                    value={recebimento11["11x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "11x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="12x1">
                  12x:
                  <input
                    type="number"
                    name="12x1"
                    id="12x1"
                    value={recebimento11["12x"]}
                    onChange={({ target }) => {
                      setrecebimento11({
                        ...recebimento11,
                        "12x": target.value,
                      });
                    }}
                  />
                </label>
              </div>
            )}
            {quinze && (
              <div>
                <h3>Taxas para 15 dias</h3>
                <label htmlFor="avista2">
                  À vista:
                  <input
                    type="number"
                    name="avista2"
                    id="avista2"
                    value={recebimento151["avista"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        avista: target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="2x2">
                  2x:
                  <input
                    type="number"
                    name="2x2"
                    id="2x2"
                    value={recebimento151["2x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "2x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="3x2">
                  3x:
                  <input
                    type="number"
                    name="3x2"
                    id="3x2"
                    value={recebimento151["3x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "3x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="4x2">
                  4x:
                  <input
                    type="number"
                    name="4x2"
                    id="4x2"
                    value={recebimento151["4x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "4x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="5x2">
                  5x:
                  <input
                    type="number"
                    name="5x2"
                    id="5x2"
                    value={recebimento151["5x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "5x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="6x2">
                  6x:
                  <input
                    type="number"
                    name="6x2"
                    id="6x2"
                    value={recebimento151["6x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "6x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="7x2">
                  7x:
                  <input
                    type="number"
                    name="7x2"
                    id="7x2"
                    value={recebimento151["7x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "7x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="8x2">
                  8x:
                  <input
                    type="number"
                    name="8x2"
                    id="8x2"
                    value={recebimento151["8x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "8x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="9x2">
                  9x:
                  <input
                    type="number"
                    name="9x2"
                    id="9x2"
                    value={recebimento151["9x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "9x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="10x2">
                  10x:
                  <input
                    type="number"
                    name="10x2"
                    id="10x2"
                    value={recebimento151["10x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "10x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="11x2">
                  11x:
                  <input
                    type="number"
                    name="11x2"
                    id="11x2"
                    value={recebimento151["11x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "11x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="12x2">
                  12x:
                  <input
                    type="number"
                    name="12x2"
                    id="12x2"
                    value={recebimento151["12x"]}
                    onChange={({ target }) => {
                      setrecebimento151({
                        ...recebimento151,
                        "12x": target.value,
                      });
                    }}
                  />
                </label>
              </div>
            )}
            {trinta && (
              <div>
                <h3>Taxas para 30 dias</h3>
                <label htmlFor="avista3">
                  À vista:
                  <input
                    type="number"
                    name="avista3"
                    id="avista3"
                    value={recebimento301["avista"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        avista: target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="2x3">
                  2x:
                  <input
                    type="number"
                    name="2x3"
                    id="2x3"
                    value={recebimento301["2x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "2x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="3x3">
                  3x:
                  <input
                    type="number"
                    name="3x3"
                    id="3x3"
                    value={recebimento301["3x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "3x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="4x3">
                  4x:
                  <input
                    type="number"
                    name="4x3"
                    id="4x3"
                    value={recebimento301["4x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "4x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="5x3">
                  5x:
                  <input
                    type="number"
                    name="5x3"
                    id="5x3"
                    value={recebimento301["5x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "5x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="6x3">
                  6x:
                  <input
                    type="number"
                    name="6x3"
                    id="6x3"
                    value={recebimento301["6x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "6x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="7x3">
                  7x:
                  <input
                    type="number"
                    name="7x3"
                    id="7x3"
                    value={recebimento301["7x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "7x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="8x3">
                  8x:
                  <input
                    type="number"
                    name="8x3"
                    id="8x3"
                    value={recebimento301["8x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "8x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="9x3">
                  9x:
                  <input
                    type="number"
                    name="9x3"
                    id="9x3"
                    value={recebimento301["9x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "9x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="10x3">
                  10x:
                  <input
                    type="number"
                    name="10x3"
                    id="10x3"
                    value={recebimento301["10x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "10x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="11x3">
                  11x:
                  <input
                    type="number"
                    name="11x3"
                    id="11x3"
                    value={recebimento301["11x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "11x": target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="12x3">
                  12x:
                  <input
                    type="number"
                    name="12x3"
                    id="12x3"
                    value={recebimento301["12x"]}
                    onChange={({ target }) => {
                      setrecebimento301({
                        ...recebimento301,
                        "12x": target.value,
                      });
                    }}
                  />
                </label>
              </div>
            )}
          </div>
        </form>
        {!response.loading && (
          <button onClick={handleSubmit} className="btn">
            Cadastrar
          </button>
        )}
        {response.loading && (
          <button className="btn" disabled>
            aguarde...
          </button>
        )}

        {response.error && <p className="error">{response.error}</p>}
        <DashFooter/>
      </div>

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default CadPlano;
