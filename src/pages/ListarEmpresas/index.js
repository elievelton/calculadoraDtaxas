import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import CadEmpresa from "../CadEmpresa";
import Relatorio from "../Relatorio";
import style from "./Listar.module.css"

const ListarEmpresas = ({className}) => {
  const empresas = ["sumup", "mercado pago"];

  return (
    <div className={`${style.lista} ${className}`}>
      <h2>Empresas Cadastradas</h2>
      <ul>
        {empresas.map(empresa => {
            return <li key={empresa} className={style.item}>
                <p>{empresa}</p> 
                <div className={style.buttons}>
                    <Link to={'/paineldecontrole/listar/edit'}>Editar</Link>
                    <Link to={'/paineldecontrole/listar/planos'}>Ver Planos</Link>
                    <Link to={'/paineldecontrole/listar/cadastrarplano'}>Adicionar Plano</Link>
                </div>
            </li>
        })}
      </ul>
    </div>
  );
};

export default ListarEmpresas;
