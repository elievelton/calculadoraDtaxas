import styles from "../Cadastro/Cadastro.module.css";
import React, { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/userAuthentucation";
import { Link } from "react-router-dom"

function Cadastro() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);


  return (
    <div className={`page ${styles.Cadastro}`}>
      <div className={styles.imagem}>
      <img src="/static/images/img_cadastro.png" alt="Login" ></img>
      </div>
      <div className={styles.container}>
          <h1>Cadastre-se</h1>
          <p>Já possui login? <Link to='/login'>Faça login</Link></p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="diplayName"
                placeholder="Nome do usuario"
                required
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
              />
            </label>
            <label>
              <span>E-mail:</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name="diplayEmail"
                placeholder="Digite seu E-mail"
                required
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="senhaUser"
                placeholder="Ensira sua senha"
                required
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                name="confirmaSenha"
                placeholder="Confirme sua senha"
                required
              />
            </label>

            {!loading && <button className="btn">Cadastrar</button>}
            {loading && (
              <button className="btn" disabled>
                aguarde...
              </button>
            )}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
    </div>
  );
}
export default Cadastro;
