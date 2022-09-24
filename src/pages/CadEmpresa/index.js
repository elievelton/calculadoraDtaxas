import React from 'react'
import style from './CadEmpresa.module.css'

const CadEmpresa = ({className}) => {
    
    const [nome,setNome] = React.useState('')
    const [melhor,setMelhor] = React.useState('')
    const [nota,setNota] = React.useState('5')


  return (
    <div className={`${style.cadEmp} ${className}`}>
        <h2>Cadastrar empresa</h2>
        <form action="">
            <label htmlFor="nome">Nome da empresa:
            <input type="text" name="nome" id="" value={nome} onChange={(target) => {setNome(target.value)}}/></label>
            <label htmlFor="destak">Destaque em que?
            <input type="text" name="destak" id="" placeholder='(deixar em branco se não houver)' value={melhor} onChange={(target) => {setMelhor(target.value)}}/></label>
            <label htmlFor="nota">Nota do reclame aqui:
            <select name="nota" id="nota" value={nota} onChange={(target) => {setNota(target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select></label>
        </form>
        <button>Cadastrar</button>
    </div>
  )
}

export default CadEmpresa