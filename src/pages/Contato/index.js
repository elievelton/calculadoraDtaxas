import styles from "../Contato/Contato.module.css";
import React, { useState, useRef } from "react";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sub, setSub] = useState(false);

  const form = useRef();

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
      <div className={styles.design}>a</div>
      <div className={styles.formu}>
        <form ref={form} className="form-control" onSubmit={sendEmail} >
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
          <button className="btn" type="submit" name="submit">
            Enviar mensagem
          </button>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </form>
      </div>
    </div>
  );
}
export default Contato;
