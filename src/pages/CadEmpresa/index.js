import React from "react";
import style from "./CadEmpresa.module.css";
import { useInsertDocument } from "../../hooks/insertEmpresa";
import { useAuthValue } from "../../context/AuthContext";

const CadEmpresa = ({ className }) => {
  const [nome, setNome] = React.useState("");
  const [notaReclameAqui, setNotaReclameAqui] = React.useState("");
  const [melhoremque, setmelhoremque] = React.useState();
  const [errorForm, setErrorForm] = React.useState("");
  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("empresas");

  //Função de enviar o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm("");
    let ids = "";
    insertDocument({
      nome,
      notaReclameAqui,
      melhoremque,
    });
  };

  return (
    <div className={`${style.cadEmp} ${className}`}>
      <h2>Cadastrar empresa</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome da empresa:
          <input
            type="text"
            name="nome"
            id=""
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="destak">
          Destaque em que?
          <input
            type="number"
            name="destak"
            id=""
            placeholder="(deixar em branco se não houver)"
            value={melhoremque}
            onChange={(e) => setmelhoremque(e.target.value)}
          />
        </label>
        <label htmlFor="nota">
          Nota do reclame aqui:
          <select
            name="nota"
            id="nota"
            value={notaReclameAqui}
            onChange={(e) => setNotaReclameAqui(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
      </form>
      {!response.loading && <button className="btn">Cadastrar</button>}
      {response.loading && (
        <button className="btn" disabled>
          aguarde...
        </button>
      )}

      {response.error && <p className="error">{response.error}</p>}
    </div>
  );
};

export default CadEmpresa;
