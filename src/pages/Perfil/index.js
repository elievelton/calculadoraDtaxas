import React, { useState } from "react";
import style from "./Perfil.module.css";
import { DashFooter } from "../../components/DashFooter";

const Perfil = ({ className }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

  return (
    <>
    <div className={`${style.user} ${className}`}>
      <h2 className="content">Editar Perfil</h2>
      <form action="" className={style.form}>
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" value={nome}  onChange={({target}) => setNome(target.value)}/>
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" value={email} onChange={({target}) => setEmail(target.value)}/>
        </label>
        <label htmlFor="senha">
          Senha:
          <input type="password" name="senha" value={password} onChange={({target}) => setPassword(target.value)}/>
        </label>
        <label htmlFor="senhaC">
          Confirme a senha:
          <input type="password" name="senhaC" value={passwordC} onChange={({target}) => setPasswordC(target.value)}/>
        </label>
      </form>
      <button>Salvar perfil</button>
      
    
    <DashFooter />
    
    </div>
    </>
  );
};

export default Perfil;
