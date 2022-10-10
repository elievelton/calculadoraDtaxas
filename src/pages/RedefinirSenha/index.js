import React from "react";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import style from "./Senha.module.css";

export function RedefinirSenha() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const nave = useNavigate();

  function redirect(nave) {
    return nave("/login");
  }
  function recuperarSenha() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then((resultado) => {
        console.log("Email enviado com sucesso!");
      })
      .catch((err) => {
        setMensagem("Erro ao enviar o e-mail: " + err.message);
      });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    recuperarSenha();
    notify();
    setTimeout(redirect, 6000, nave);
  };
  //notificação de cadastro de empresa
  const notify = () =>
    toast.info(
      "E-mail enviado com sucesso, verifique sua caixa de entrada ou spaw",
      {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.caixa}>
            <div>
              <p>Digite seu e-mail para receber o link:</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="diplayEmail"
                placeholder="Digite seu E-mail"></input>
            </div>
            <div className={style.botao}>
              <button>Enviar</button>
            </div>
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}
