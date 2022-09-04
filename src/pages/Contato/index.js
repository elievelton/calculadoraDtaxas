import styles from "../Contato/Contato.module.css";
import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
//Notificação de enviar mensagem
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sub, setSub] = useState(false);

  

  const form = useRef();
  const notify = () =>
    toast.success("Mensagem Enviada!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
    
    );
  
   const [user, setUser] = useState({
      nome: "",
      email: "",
      mensagem: "",
   }); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "calculadoradeTxas",
        "template_3lrqp3l",
        form.current,
        "1wslfI6JpR1pcnXHc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={`page ${styles.contato}`}>
      <div className={styles.titulo}>
        <h2>Contato</h2>
        <p>Fale conosco</p>
      </div>
      <div className={styles.design}>
        <img src="/static/images/img_contato.png" alt="Contato"></img>
      </div>
      <div className={styles.formu}>
        <form ref={form} className="form-control" onSubmit={sendEmail}>
          <input
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={nome}
            require
            placeholder="Seu Nome"
            name="nome"></input>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            require
            placeholder="Digite seu E-mail"
            name="email"></input>
          <textarea
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
            name="mensagem"
            require
            placeholder="Digite sua mensagem"
          />
          
          <button  onClick={notify} className="btn" type="submit" name="submit">
            Enviar mensagem
          </button>
          
         
          <ToastContainer
            theme="colored"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  );
  
  
}
export default Contato;
