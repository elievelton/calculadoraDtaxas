import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import CadEmpresa from "../CadEmpresa";
import Relatorio from "../Relatorio";
import style from "./Listar.module.css";
import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const ListarEmpresas = ({ className }) => {
  const [dataPlanos, setDataPlanos] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  // busca no banco de dados do firebase
  const empresaCollectionRef = collection(db, "empresas");
  const planoCollectionRef = collection(db, "planos");

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
  useEffect(() => {
    getEmpresas();
  }, []);

 
  //Funções para deletar empresa e plano precisa apenas do id
  async function deletePlano(id) {
    const userDoc = doc(db, "planos", id);
    await deleteDoc(userDoc);
  }
  async function deleteEmpresa(id) {
    const userDoc = doc(db, "empresas", id);
    await deleteDoc(userDoc);
    getEmpresas();
  }
  //função busca todos os planos de uma empresa e deleta
  const buscaEmpresaFiltro = (chave) => {
    dataPlanos.filter(person => person.reference ===chave.toLowerCase()).map(filteredPerson => (
      deletePlano(filteredPerson.id)
      ));
      
};

  return (
    <div className={`${style.lista} ${className}`}>
      <h2>Empresas Cadastradas</h2>
      <ul>
        {empresas.map((empresa) => {
          return (
            <li key={empresa.id} className={style.item}>
              <p>{empresa.nome}</p>
              <div className={style.buttons}>
                <Link
                  to={"/paineldecontrole/listar/edit"}
                  onClick={(target) => {
                    localStorage.setItem("empresa", empresa.chave);
                    localStorage.setItem("nomeEmpresa", empresa.nome);
                  }}>
                  Editar
                </Link>
                <Link
                  to={"/paineldecontrole/listar/planos"}
                  onClick={(target) => {
                    localStorage.setItem("empresa", empresa.chave);
                    localStorage.setItem("nomeEmpresa", empresa.nome);
                  }}>
                  Ver Planos
                </Link>
                <Link
                  to={"/paineldecontrole/listar/cadastrarplano"}
                  onClick={(target) => {
                    localStorage.setItem("empresa", empresa.chave);
                    localStorage.setItem("nomeEmpresa", empresa.nome);
                  }}>
                  Adicionar Plano
                </Link>
                <button style={{ backgroundColor: "#ff8d8d" }} onClick ={()=>{
                  deleteEmpresa(empresa.id)
                  buscaEmpresaFiltro(empresa.chave)
                  
                }} >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListarEmpresas;
