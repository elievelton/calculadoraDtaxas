import styles from "../Cadastro/Cadastro.module.css";
import React, { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/userAuthentucation";

function Cadastro() {
  const [displayName, setDisplayName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [senhaUser, setSenhaUser] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      displayEmail,
      senhaUser,
    };
    if (senhaUser !== confirmaSenha) {
      setError("As senhas precisam ser iguais!");
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
    <div className={styles.Cadastro}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <h1>Cadastre-se Agora</h1>
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
                onChange={(e) => setDisplayEmail(e.target.value)}
                value={displayEmail}
                type="text"
                name="diplayEmail"
                placeholder="Digite seu E-mail"
                required
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                onChange={(e) => setSenhaUser(e.target.value)}
                value={senhaUser}
                type="password"
                name="senhaUser"
                placeholder="Ensira sua senha"
                required
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                onChange={(e) => setConfirmaSenha(e.target.value)}
                value={confirmaSenha}
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
    </div>
  );
}
export default Cadastro;
