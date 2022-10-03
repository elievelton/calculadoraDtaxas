import React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import style from "./CadPlano.module.css";
import { useInsertDocument } from "../../hooks/insertEmpresa";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const CadPlano = ({ className }) => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(null);
  const [reference, setReference] = useState("");
  const empresaRef = localStorage.getItem('empresa')

  const [um, setUm] = useState(false);
  const [quinze, setQuinze] = useState(false);
  const [trinta, setTrinta] = useState(false);
  const [recebimento1, setRecebimento1] = useState([]);
  const [recebimento15, setRecebimento15] = useState([]);
  const [recebimento30, setRecebimento30] = useState([]);
  const [errorForm, setErrorForm] = React.useState("");
  //Hook responsável por inseirir os dados no Banco de dados
  const { insertDocument, response } = useInsertDocument("planos");

  //notificação de cadastro de empresa
  const notify = () =>
  toast.success("Cadastro feito com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    useEffect(() => {
        
                
            setReference(empresaRef);
          
        
    }, [nome]);
    
  //Função de enviar o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm("");
    
    insertDocument({
      nome,
      tipo,
      reference,
      recebimento1,
      recebimento15,
      recebimento30,
    });
    notify();
    
  };

  return (
    <>
    <div className={`${style.cadplanos} ${className}`}>
      <h2>
        Cadastrar Plano (
        <span>{localStorage.getItem("empresa")}</span>)
        
        
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
                  value={recebimento1[0]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[0] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="avista1">
                À vista:
                <input
                  type="number"
                  name="avista1"
                  id="avista1"
                  value={recebimento1[1]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[1] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="2x1">
                2x:
                <input
                  type="number"
                  name="2x1"
                  id="2x1"
                  value={recebimento1[2]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[2] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="3x1">
                3x:
                <input
                  type="number"
                  name="3x1"
                  id="3x1"
                  value={recebimento1[3]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[3] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="4x1">
                4x:
                <input
                  type="number"
                  name="4x1"
                  id="4x1"
                  value={recebimento1[4]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[4] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="5x1">
                5x:
                <input
                  type="number"
                  name="5x1"
                  id="5x1"
                  value={recebimento1[5]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[5] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="6x1">
                6x:
                <input
                  type="number"
                  name="6x1"
                  id="6x1"
                  value={recebimento1[6]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[6] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="7x1">
                7x:
                <input
                  type="number"
                  name="7x1"
                  id="7x1"
                  value={recebimento1[7]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[7] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="8x1">
                8x:
                <input
                  type="number"
                  name="8x1"
                  id="8x1"
                  value={recebimento1[8]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[8] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="9x1">
                9x:
                <input
                  type="number"
                  name="9x1"
                  id="9x1"
                  value={recebimento1[9]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[9] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="10x1">
                10x:
                <input
                  type="number"
                  name="10x1"
                  id="10x1"
                  value={recebimento1[10]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[10] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="11x1">
                11x:
                <input
                  type="number"
                  name="11x1"
                  id="11x1"
                  value={recebimento1[11]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[11] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
              <label htmlFor="12x1">
                12x:
                <input
                  type="number"
                  name="12x1"
                  id="12x1"
                  value={recebimento1[12]}
                  onChange={(e) => {
                    let array = recebimento1;
                    array[12] = e.target.value;
                    setRecebimento1(array);
                  }}
                />
              </label>
            </div>
          )}
          {quinze && (
            <div>
              <h3>Taxas para 15 dias</h3>
              <label htmlFor="debito2">
                Debito:
                <input
                  type="number"
                  name="debito"
                  id="debito"
                  value={recebimento15[0]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[0] = e.target.value;
                    setRecebimento15(array2);
                }}
                />
              </label>
              <label htmlFor="avista2">
                À vista:
                <input
                  type="number"
                  name="avista2"
                  id="avista2"
                  value={recebimento15[1]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[1] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="2x2">
                2x:
                <input
                  type="number"
                  name="2x2"
                  id="2x2"
                  value={recebimento15[2]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[2] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="3x2">
                3x:
                <input
                  type="number"
                  name="3x2"
                  id="3x2"
                  value={recebimento15[3]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[3] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="4x2">
                4x:
                <input
                  type="number"
                  name="4x2"
                  id="4x2"
                  value={recebimento15[4]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[4] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="5x2">
                5x:
                <input
                  type="number"
                  name="5x2"
                  id="5x2"
                  value={recebimento15[5]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[5] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="6x2">
                6x:
                <input
                  type="number"
                  name="6x2"
                  id="6x2"
                  value={recebimento15[6]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[6] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="7x2">
                7x:
                <input
                  type="number"
                  name="7x2"
                  id="7x2"
                  value={recebimento15[7]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[7] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="8x2">
                8x:
                <input
                  type="number"
                  name="8x2"
                  id="8x2"
                  value={recebimento15[8]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[8] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="9x2">
                9x:
                <input
                  type="number"
                  name="9x2"
                  id="9x2"
                  value={recebimento15[9]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[9] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="10x2">
                10x:
                <input
                  type="number"
                  name="10x2"
                  id="10x2"
                  value={recebimento15[10]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[10] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="11x2">
                11x:
                <input
                  type="number"
                  name="11x2"
                  id="11x2"
                  value={recebimento15[11]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[11] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
              <label htmlFor="12x2">
                12x:
                <input
                  type="number"
                  name="12x2"
                  id="12x2"
                  value={recebimento15[12]}
                  onChange={(e) => {
                    let array2 = recebimento15;
                    array2[12] = e.target.value;
                    setRecebimento15(array2);
                  }}
                />
              </label>
            </div>
          )}
          {trinta && (
            <div>
              <h3>Taxas para 30 dias</h3>
              <label htmlFor="debito3">
                Debito:
                <input
                  type="number"
                  name="debito"
                  id="debito"
                  value={recebimento30[0]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[0] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="avista3">
                À vista:
                <input
                  type="number"
                  name="avista3"
                  id="avista3"
                  value={recebimento30[1]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[1] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="2x3">
                2x:
                <input
                  type="number"
                  name="2x3"
                  id="2x3"
                  value={recebimento30[2]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[2] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="3x3">
                3x:
                <input
                  type="number"
                  name="3x3"
                  id="3x3"
                  value={recebimento30[3]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[3] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="4x3">
                4x:
                <input
                  type="number"
                  name="4x3"
                  id="4x3"
                  value={recebimento30[4]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[4] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="5x3">
                5x:
                <input
                  type="number"
                  name="5x3"
                  id="5x3"
                  value={recebimento30[5]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[5] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="6x3">
                6x:
                <input
                  type="number"
                  name="6x3"
                  id="6x3"
                  value={recebimento30[6]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[6] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="7x3">
                7x:
                <input
                  type="number"
                  name="7x3"
                  id="7x3"
                  value={recebimento30[7]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[7] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="8x3">
                8x:
                <input
                  type="number"
                  name="8x3"
                  id="8x3"
                  value={recebimento30[8]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[8] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="9x3">
                9x:
                <input
                  type="number"
                  name="9x3"
                  id="9x3"
                  value={recebimento30[9]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[9] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="10x3">
                10x:
                <input
                  type="number"
                  name="10x3"
                  id="10x3"
                  value={recebimento30[10]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[10] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="11x3">
                11x:
                <input
                  type="number"
                  name="11x3"
                  id="11x3"
                  value={recebimento30[11]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[11] = e.target.value;
                    setRecebimento30(array3);
                }}
                />
              </label>
              <label htmlFor="12x3">
                12x:
                <input
                  type="number"
                  name="12x3"
                  id="12x3"
                  value={recebimento30[12]}
                  onChange={(e) => {
                    let array3 = recebimento30;
                    array3[12] = e.target.value;
                    setRecebimento30(array3);
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
