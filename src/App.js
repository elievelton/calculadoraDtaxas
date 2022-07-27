
import firebase from './firebaseConnection';
import React, { useState } from 'react';
import './style.css';


function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleAdd(){
    await firebase.firestore().collection('usuario').doc('122212').set({
      nome: nome,
      email: email,
      senha: senha
    }).then(()=>{
      console.log('Dados cadastrados com sucesso!')
    }).catch((error)=>{
      console.log("Gerou Erro" + error)
    })
  }
  return (
    <div className="App">
      <h1>Testando banco de dados Firebase</h1>
      <label> 
          Nome:
      </label>
      
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
      <label> 
          E-mail:
      </label>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label> 
          Senha:
      </label>
      <input type="text" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
      <button onClick={handleAdd}>Cadastrar</button>
    </div>
  );
}

export default App;
