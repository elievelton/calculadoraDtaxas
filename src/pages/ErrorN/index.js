import * as React from 'react';
import { Link } from "react-router-dom";
import style from "./Error.module.css"

//função para atualizar uma página
//   function refreshPage() {
//     setTimeout(()=>{
//         window.location.reload(true);
//     }, 10);
//     console.log('page to reload')
// }
const ErrorN = ({ className }) => {

  return (
    <>
    
    <div className={`${style.container} ${className}`}>
      <div className={style.caixaError}>
        <img className = {style.img} src='https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/pt/files/2013/12/http_code_404_error.jpg?itok=uFS5CFuQ'></img>
      <h2>Você não tem permissão para isso, atualize está página</h2>
       <button className={style.btn} > 
      <Link className={style.link} to ={{pathname:"/paineldecontrole/user"}} >
        
        <span>Voltar Página</span>
        
      </Link>
      </button>
      
      </div>
    </div>
    
    </>
  )
}

export default ErrorN