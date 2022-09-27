import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import CadEmpresa from "../CadEmpresa";
import Relatorio from "../Relatorio";
import style from "./Listar.module.css"
import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import {FaTrash} from "react-icons/fa";

const ListarPlanos = ({className}) => {
  const empresaRef = localStorage.getItem('empresa')
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
   }, []);
 
   //Filtragem dos dados planos
   const nomeDoPlanos = dataPlanos.map((plano) => plano.nome);
   const reference = dataPlanos.map((plano) => plano.reference);
   const tipo = dataPlanos.map((plano) => plano.tipo);
   const taxas1 = dataPlanos.map((plano) => plano.recebimento1);
   const taxas2 = dataPlanos.map((plano) => plano.recebimento15);
   const taxas3 = dataPlanos.map((plano) => plano.recebimento30);
 
   //filtragem dos dados Empresa
 
   const nomeDaEmpresa = empresas.map((empre) => empresas.nome);
   const notaReclame = empresas.map((empre) => empresas.notaReclameAqui);
   const melhorEm = empresas.map((empre) => empresas.melhorEmQue);
 
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

  return (
    <div className={`${style.lista} ${className}`}>
      <h2>Planos Cadastradas da <span>{empresaRef}</span></h2>
      <ul>
        {empresas.map(empresa => {
            return <li key={empresa.id} className={style.item}>
                <p>{empresa.nome}</p> 
                <div className={style.buttons}>
                    <Link to={'/paineldecontrole/listar/planos/edit'} onClick={(target)=>{localStorage.setItem('plano',empresa.nome)}}>Editar Plano</Link>
                    <button style={{backgroundColor: '#ff8d8d'}}><FaTrash/></button>
                </div>
            </li>
        })}
      </ul>
    </div>
  );
};

export default ListarPlanos;
