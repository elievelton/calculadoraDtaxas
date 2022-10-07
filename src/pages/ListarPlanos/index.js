import React from "react";
import { Link } from "react-router-dom";
import CadEmpresa from "../CadEmpresa";
import Relatorio from "../Relatorio";
import style from "./Listar.module.css"
import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {FaTrash, FaEdit} from "react-icons/fa";
import { DashFooter } from "../../components/DashFooter";



const ListarPlanos = ({className}) => {
  const empresaRef = localStorage.getItem('empresa')
  const empreNome = localStorage.getItem('nomeEmpresa')
  const [dataPlanos, setDataPlanos] = useState([]);

  const [buscaPlanos, setBuscaPlanos] = useState([]);


  
   // busca no banco de dados do firebase
  
   const planoCollectionRef = collection(db, "planos");
 
   const getEmpresas = async () => {
     
     const lista_planos = await getDocs(planoCollectionRef);

     
     setDataPlanos(
       lista_planos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
     );
   };
   useEffect(() => {
     getEmpresas();
   }, []);
 
  

   const BuscaPlanoFiltro = () => {
   const data = dataPlanos.filter((plano) =>
      plano.reference.startsWith(empresaRef.toLowerCase())
    );
    setBuscaPlanos(data);
  };
  

 
   //Funções para deletar empresa e plano precisa apenas do id
  async function deletePlano(id) {

    const userDoc = doc(db, "planos", id);
    await deleteDoc(userDoc);
    getEmpresas();
  }
  
  //deleteEmpresa('ywAoTNmx6EDNC4MWRMew')
  useEffect(() => {
    BuscaPlanoFiltro();
    
  }, [dataPlanos]);



  return (
    <div className={`${style.lista} ${className}`}>
      <h2>Planos Cadastradas da <span>{empreNome}</span></h2>
      <ul>
        {buscaPlanos.map(plan => {
            return <li key={plan.id} className={style.item}>
                <p>{plan.nome}</p> 
                <div className={style.buttons}>
                  <div className={style.menu}>
                      
                    <Link  to={'/paineldecontrole/listar/planos/edit'} onClick={({target})=>{localStorage.setItem('plano',plan.nome)}}><FaEdit size={18}/><span>Editar Plano</span></Link>
                    <button onClick={()=>{
                      deletePlano(plan.id)
                      
                    }} style={{backgroundColor: '#ff8d8d'}}><FaTrash size={20}/></button>
                </div>
                </div>
            </li>
        })}
      </ul>
      <div className ={style.fixarFooter}>
      <DashFooter />
      </div>
    </div>
    
  );
};

export default ListarPlanos;
