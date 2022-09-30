import styles from "../Login/login.module.css";
import React, { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/userAuthentucation";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };
    const res = await login(user);

    console.log(res);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={`page ${styles.Login}`}>
      <div className={styles.imagem}>
        <img src="/static/images/img_login.png" alt="Login"></img>
      </div>
      <div className={styles.formulario}>
        <h1>Faça seu Login</h1>
        <p>
          Não possui login? <Link to="/cadastro">Cadastre-se</Link>
        </p>
        <form onSubmit={handleSubmit}>
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

          {!loading && <button className={styles.botao}>Login</button>}
          {loading && (
            <button className={styles.botao} disabled>
              aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
export default Login;
