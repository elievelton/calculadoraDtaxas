import React from 'react'
import { Link } from "react-router-dom";

const ErrorN = () => {
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(true);
    }, 3000);
    console.log('page to reload')
}

  return (
    <div>
      <Link to ={{pathname:"/"}} onClick={refreshPage}>
        <h3>Você não tem permissão para isso, atualize está página</h3>
      </Link>
    </div>
  )
}

export default ErrorN