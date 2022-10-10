import { useState } from "react";
import style from "./Perfil.module.css";
import { DashFooter } from "../../components/DashFooter";
import { useAuthentication } from "../../hooks/userAuthentucation";


const Perfil = ({ className }) => {
  const { auth } = useAuthentication();

  const [nome, setNome] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [bannerUrl, setBannerUrl] = useState(auth.currentUser.photoURL)
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  //hook usado para pegar a informação de quem está logado
  const user = auth.currentUser;
  function updatesenha(iduser) {

    if (iduser != null) {
      iduser.updatePassword(password)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };


  return (
    <>
      <div className={`${style.user} ${className}`}>
        <h2 className="content">Editar Perfil</h2>
        <form className={style.form}>
          
          <div  className={style.photoUrl}>
          <label htmlFor="photo">
            Imagem de Perfil:
              <img  src={bannerUrl} referrerpolicy="no-referrer" width={130}height={130} alt="Perfil"/>
          </label>
          </div>
          <label htmlFor="name">
          Nome:
          <input type="text" name="name" value={nome}  onChange={(e) => setNome(e.target.value)}/>
        </label>
        <label htmlFor="email">
          Email:
          <input className = {style.iniput} disabled={email} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              name="senha"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="senhaC">
            Confirme a senha:
            <input
              type="password"
              name="senhaC"
              placeholder="*********"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
            />
          </label>
        </form>
        <button onClick={handleSubmit}>Salvar perfil</button>

        <DashFooter />
      </div>
    </>
  );
};

export default Perfil;
