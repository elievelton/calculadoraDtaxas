import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FaTrash } from "react-icons/fa";
import style from "./BotaoExcluir.module.css"
import { useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

import { db } from "../../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ModalExcluir({id, chave}) {
  const nave = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [dataPlanos, setDataPlanos] = useState([]);
  const [empresas, setEmpresas] = useState([]);

   //notificação de excluir empresa
   const notify = () =>
   toast.success("Exclusão realizada!", {
     position: "top-right",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });

  // busca no banco de dados do firebase
  const empresaCollectionRef = collection(db, "empresas");
  const planoCollectionRef = collection(db, "planos");

  const getEmpresas = async () => {
    const lista_empresas = await getDocs(empresaCollectionRef);
    const lista_planos = await getDocs(planoCollectionRef);

    setEmpresas(
      lista_empresas.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setDataPlanos(
      lista_planos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  useEffect(() => {
    getEmpresas();
  }, []);

  //Funções para deletar empresa e plano precisa apenas do id
  async function deletePlano(idi) {
    const userDoc = doc(db, "planos", idi);
    await deleteDoc(userDoc);
  }
  async function deleteEmpresa(idi) {
    const userDoc = doc(db, "empresas", idi);
    await deleteDoc(userDoc);
    getEmpresas();
  }
  //função busca todos os planos de uma empresa e deleta
  const buscaEmpresaFiltro = (chavei) => {
    dataPlanos
      .filter((person) => person.reference === chavei.toLowerCase())
      .map((filteredPerson) => deletePlano(filteredPerson.id));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  //função para redirecionar depois de excluir
  function refresh(){
    
    return(window.location.reload())
    

  }

  const handleClose = (resposta) => {
    //Entra quando for excluir empresa
    if(resposta===true && chave !== undefined){
        deleteEmpresa(id)
        buscaEmpresaFiltro(chave)
        notify()
        setTimeout(refresh, 1000)
        setOpen(false);

    }
    else if(resposta===false && chave !== undefined){

        setOpen(false);
    }
    //Entra quando for excluir um plano
    else if(resposta===true && chave === undefined){
        deletePlano(id)
        notify()
        setTimeout(refresh, 1000)
        setOpen(false);

  }
  else if(resposta===false && chave === undefined){setOpen(false);}
}

  return (
    <>
    <div>
      <button className={style.excluirB} onClick={handleClickOpen}>
      <FaTrash/>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Excluir item:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja realmente excluir esse item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            handleClose(false);
          }}>NÃO</Button>
          <Button onClick={()=>{
            handleClose(true);
          }} autoFocus>
            SIM
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      <ToastContainer
            theme="colored"
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </>
  );
}