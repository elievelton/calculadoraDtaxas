import React from "react";
import style from "./EditEmpresa.module.css";
import { useUpdateDocument } from "../../hooks/updateDocument";
import { useAuthValue } from "../../context/AuthContext";
import { useEffect, useState, useRef } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { DashFooter } from "../../components/DashFooter";
import { ToastContainer, toast } from "react-toastify";

const EditEmpresa = ({ className }) => {
  
  const refEmpre = localStorage.getItem("empresa");
  const empreNome = localStorage.getItem('nomeEmpresa')
  
  const [nome, setNome] = useState("");
  const [notaReclameAqui, setNotaReclameAqui] = useState();
  const [melhoremque, setmelhoremque] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState();
  const [errorForm, setErrorForm] = useState("");
  const { user } = useAuthValue();
  const [buscaEmpre, setBuscaEmpre] = useState([]);
  const [campo, setCampo] = useState(false);

  const { updateDocument, response } = useUpdateDocument("empresas");

  const [dataPlanos, setDataPlanos] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  // busca no banco de dados do firebase
  const empresaCollectionRef = collection(db, "empresas");
  const planoCollectionRef = collection(db, "planos");

  useEffect(() => {
    const getEmpresas = async () => {
      const lista_empresas = await getDocs(empresaCollectionRef);
      const lista_planos = await getDocs(planoCollectionRef);

      setEmpresas(
        lista_empresas.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setDataPlanos(
        lista_planos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getEmpresas();
    setCampo(!campo)
    
  }, []);


 

  //função busca e seta as informações do BD
  const buscaEmpresaFiltro = () => {
    empresas.filter(person => person.chave === refEmpre).map(filteredPerson => (
      setNotaReclameAqui(filteredPerson.notaReclameAqui),
      setBannerUrl(filteredPerson.bannerUrl),
      setLink(filteredPerson.link),
      setNome(filteredPerson.nome),
      setmelhoremque(filteredPerson.melhoremque),
      setId(filteredPerson.id)

    ))
    
    
  };
  
  useEffect(() => {
  
    buscaEmpresaFiltro()
    
   }, [empresas]);

  //Função de enviar o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm("");
    const data = {
      nome,
      notaReclameAqui,
      melhoremque,
      bannerUrl,
      link,
    }
    updateDocument(id,data);
    notify();
  };

  //notificação de cadastro de empresa
  const notify = () =>
  toast.success("Dados atualizado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
    <div className={`${style.cadEmp} ${className}`}>
      <h2>Editar empresa {empreNome}</h2>
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
      {!response.loading && <button onClick={handleSubmit} className="btn">Atualizar</button>}
      {response.loading && (
        <button  className="btn" disabled>
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

export default EditEmpresa;
