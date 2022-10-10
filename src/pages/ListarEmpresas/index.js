import React from "react";
import { Link } from "react-router-dom";

import style from "./Listar.module.css";
import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaRegEye, FaPlusCircle } from "react-icons/fa";
import { DashFooter } from "../../components/DashFooter";
import ModalExcluir from "../../components/ModalExcluir";

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


  return (
    <div className={`${style.lista} ${className}`}>
      <h2>Empresas Cadastradas</h2>
      <ul>
        {empresas.map((empresa) => {
          return (
            <li key={empresa.id} className={style.item}>
              <p>{empresa.nome}</p>
              <div className={style.buttons}>
                <div className={style.menu}>
                  <Link
                    to={"/paineldecontrole/listar/edit"}
                    onClick={(target) => {
                      localStorage.setItem("empresa", empresa.chave);
                      localStorage.setItem("nomeEmpresa", empresa.nome);
                    }}>
                    <FaEdit size={18} />

                    <span>Editar</span>
                  </Link>
                  <Link
                    to={"/paineldecontrole/listar/planos"}
                    onClick={(target) => {
                      localStorage.setItem("empresa", empresa.chave);
                      localStorage.setItem("nomeEmpresa", empresa.nome);
                    }}>
                    <FaRegEye size={18} />
                    <span>Ver Planos</span>
                  </Link>
                  <Link
                    to={"/paineldecontrole/listar/cadastrarplano"}
                    onClick={(target) => {
                      localStorage.setItem("empresa", empresa.chave);
                      localStorage.setItem("nomeEmpresa", empresa.nome);
                    }}>
                    <FaPlusCircle size={18} />
                    <span>Add Plano</span>
                  </Link>
                </div>
                

              <ModalExcluir className={style.excluirB} id = {empresa.id} chave = {empresa.chave}/>
              </div>
            </li>
          );
          
        })}
      </ul>
      <DashFooter/>
    </div>
  );
};

export default ListarEmpresas;