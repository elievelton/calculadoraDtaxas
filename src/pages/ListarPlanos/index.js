import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import CadEmpresa from "../CadEmpresa";
import Relatorio from "../Relatorio";
import style from "./Listar.module.css"
import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {FaTrash} from "react-icons/fa";



const ListarPlanos = ({className}) => {
  const empresaRef = localStorage.getItem('empresa')
  const [dataPlanos, setDataPlanos] = useState([]);

  const [buscaPlanos, setBuscaPlanos] = useState([]);


  
   // busca no banco de dados do firebase
  
   const planoCollectionRef = collection(db, "planos");
 
   useEffect(() => {
     const getEmpresas = async () => {
       
       const lista_planos = await getDocs(planoCollectionRef);
 
       
       setDataPlanos(
         lista_planos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
       );
     };
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
  }
  async function deleteEmpresa(id) {
    const userDoc = doc(db, "empresas", id);
    await deleteDoc(userDoc);
  }
  //deleteEmpresa('ywAoTNmx6EDNC4MWRMew')
  useEffect(() => {
    BuscaPlanoFiltro();
    
  }, [dataPlanos]);



  return (
    <div className={`${style.lista} ${className}`}>
      <h2>Planos Cadastradas da <span>{empresaRef}</span></h2>
      <ul>
        {buscaPlanos.map(plan => {
            return <li key={plan.id} className={style.item}>
                <p>{plan.nome}</p> 
                <div className={style.buttons}>
                    <Link to={'/paineldecontrole/listar/planos/edit'} onClick={({target})=>{localStorage.setItem('plano',plan.nome)}}>Editar Plano</Link>
                    <button onClick={()=>{
                      deletePlano(plan.id)
                    }} style={{backgroundColor: '#ff8d8d'}}><FaTrash/></button>
                </div>
            </li>
        })}
      </ul>
    </div>
    
  );
};

export default ListarPlanos;
