import React from "react";
import style from "./CadEmpresa.module.css";
import { useInsertDocument } from "../../hooks/insertEmpresa";
import { useAuthValue } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const CadEmpresa = ({ className }) => {
  const [nome, setNome] = React.useState("");
  const [notaReclameAqui, setNotaReclameAqui] = React.useState("");
  const [melhoremque, setmelhoremque] = React.useState("");
  const [bannerUrl, setBannerUrl] = React.useState("");
  const [link, setLink] = React.useState("");
  const [errorForm, setErrorForm] = React.useState("");
  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("empresas");

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

  //Função de enviar o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm("");

    insertDocument({
      nome,
      notaReclameAqui,
      melhoremque,
      bannerUrl,
      link,
    });
    notify();
  };

  return (
    <>
    <div className={`${style.cadEmp} ${className}`}>
      <h2>Cadastrar empresa</h2>
      <form>
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
        <label htmlFor="url">
          Url da imagem:
          <input
            type="text"
            name="url"
            placeholder="(Link da imagem da máquina de cartão)"
            id=""
            value={bannerUrl}
            onChange={(e) => setBannerUrl(e.target.value)}
          />
        </label>
        <label htmlFor="link">
          Link do site:
          <input
            type="text"
            name="link"
            placeholder="(Link do site)"
            id=""
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <label htmlFor="destak">
          Destaque em que?
          <input
            type="text"
            name="destak"
            id=""
            placeholder="(deixar em branco se não houver)"
            value={melhoremque}
            onChange={(e) => setmelhoremque(e.target.value)}
          />
        </label>
        <label htmlFor="nota">
          Nota do reclame aqui:
          <input
                  
                  type="number"
                  name="nota"
                  id="nota"
                  placeholder="ex: 9.4"
                  
                  value = {notaReclameAqui}
                  onChange={(e) => {
                    setNotaReclameAqui(e.target.value);
                  }}
                />
        </label>
        
        
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

export default CadEmpresa;
