import styles from "./cadastrarempresa.module.css";
import { useState } from "react";

import { useAuthValue } from "../../context/AuthContext";

import { useInsertDocument } from "../../hooks/insertEmpresa";




function CadastrarEmpresa() {
  // Estados do cadastro de empresa
  const [nome, setNome] = useState("");
  const [notaReclameAqui, setNotaReclameAqui] = useState(1);
  const [melhoremque, setmelhoremque] = useState("");
  const [errorForm, setErrorForm] = useState("");

  const { insertDocument, response } = useInsertDocument("empresas");
  const { user } = useAuthValue();

  //Função de enviar o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm("");
    let ids =''
    ids = insertDocument({
      nome,
      notaReclameAqui,
      melhoremque,
    });

  };

  return (
    <div className={styles.criar_empresa}>
      <h2>Cadastrar Empresa</h2>
      <p>Preencha os campos abaiaxo para cadastrar uma nova empresa:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome da empresa:</span>
          <input
            type="text"
            name="nome"
            require
            placeholder="Nome da empresa"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </label>
        <label>
          <span>Nota do Reclame Aqui</span>
          <input
            type="number"
            name="notaReclameAqui"
            require
            placeholder="Digite sua nota aqui"
            onChange={(e) => setNotaReclameAqui(e.target.value)}
            value={notaReclameAqui}
          />
        </label>
        <label>
          <span>Melhor em que</span>
          <input
            type="number"
            name="Melhor em que"
            require
            placeholder="digite 1 , 2 ou 3"
            onChange={(e) => setmelhoremque(e.target.value)}
            value={melhoremque}
          />
        </label>

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            aguarde...
          </button>
        )}

        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
}
export default CadastrarEmpresa;
