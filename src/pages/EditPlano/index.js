import React from 'react'
import { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import style from './EditPlano.module.css'

const EditPlano = ({className}) => {

    const [nome,setNome] = useState('')
    const [tipo,setTipo] = useState('')
    const [um,setUm] = useState(false)
    const [quinze,setQuinze] = useState(false)
    const [trinta,setTrinta] = useState(false)
    const [recebimento1,setRecebimento1] = useState({"debito": '',
        "avista": '',
        "2x": '',
        "3x": '',
        "4x": '',
        "5x": '',
        "6x": '',
        "7x": '',
        "8x": '',
        "9x": '',
        "10x": '',
        "11x": '',
        "12x": '',
    })
    const [recebimento15,setRecebimento15] = useState({"avista": '',
        "2x": '',
        "3x": '',
        "4x": '',
        "5x": '',
        "6x": '',
        "7x": '',
        "8x": '',
        "9x": '',
        "10x": '',
        "11x": '',
        "12x": '',
    })
    const [recebimento30,setRecebimento30] = useState({"avista": '',
        "2x": '',
        "3x": '',
        "4x": '',
        "5x": '',
        "6x": '',
        "7x": '',
        "8x": '',
        "9x": '',
        "10x": '',
        "11x": '',
        "12x": '',
    })

  return (
    <div className={`${style.cadplanos} ${className}`}>
        <h2>Editar Plano (<span>{localStorage.getItem('plano')}</span>)</h2>
        <form action="" className={style.plano}>
            <div className={style.mainInfo}>
                <label htmlFor="name">Nome do plano:
                    <input type="text" name="name" id="name" value={nome} onChange={({target}) => {setNome(target.value)}}/>
                </label>
                <label htmlFor="tipo">Tipo:
                    <input type="number" name="tipo" id="tipo" placeholder='Ex: 0-CPF / 1-CNPJ'  value={tipo} onChange={({target}) => {setTipo(target.value)}}/>
                </label>
                <div className={style.recebimentosBox}>
                    <input type="checkbox" name="recebimento" id="1d" checked={um}  onChange={() => {setUm(!um)}}/> 
                    <label htmlFor="1d">1 Dia</label>
                    <input type="checkbox" name="recebimento" id="15d" checked={quinze} onChange={() => {setQuinze(!quinze)}}/>
                    <label htmlFor="15d">15 Dias</label>
                    <input type="checkbox" name="recebimento" id="30d" checked={trinta} onChange={() => {setTrinta(!trinta)}}/>
                    <label htmlFor="30d">30 Dias</label>
                </div>
            </div>
            <div className={style.recebimentos}>
                {um && <div>
                    <h3>Taxas para 1 dia</h3>
                    <label htmlFor="debito">Debito:
                        <input type="number" name="debito" id="debito" value={recebimento1['debito']} onChange={({target}) => {setRecebimento1({...recebimento1, "debito":target.value})}}/>
                    </label>
                    <label htmlFor="avista1">À vista:
                        <input type="number" name="avista1" id="avista1" value={recebimento1['avista']} onChange={({target}) => {setRecebimento1({...recebimento1, "avista":target.value})}}/>
                    </label>
                    <label htmlFor="2x1">2x:
                        <input type="number" name="2x1" id="2x1" value={recebimento1['2x']} onChange={({target}) => {setRecebimento1({...recebimento1, "2x":target.value})}}/>
                    </label>
                    <label htmlFor="3x1">3x:
                        <input type="number" name="3x1" id="3x1" value={recebimento1['3x']} onChange={({target}) => {setRecebimento1({...recebimento1, "3x":target.value})}}/>
                    </label>
                    <label htmlFor="4x1">4x:
                        <input type="number" name="4x1" id="4x1" value={recebimento1['4x']} onChange={({target}) => {setRecebimento1({...recebimento1, "4x":target.value})}}/>
                    </label>
                    <label htmlFor="5x1">5x:
                        <input type="number" name="5x1" id="5x1" value={recebimento1['5x']} onChange={({target}) => {setRecebimento1({...recebimento1, "5x":target.value})}}/>
                    </label>
                    <label htmlFor="6x1">6x:
                        <input type="number" name="6x1" id="6x1" value={recebimento1['6x']} onChange={({target}) => {setRecebimento1({...recebimento1, "6x":target.value})}}/>
                    </label>
                    <label htmlFor="7x1">7x:
                        <input type="number" name="7x1" id="7x1" value={recebimento1['7x']} onChange={({target}) => {setRecebimento1({...recebimento1, "7x":target.value})}}/>
                    </label>
                    <label htmlFor="8x1">8x:
                        <input type="number" name="8x1" id="8x1" value={recebimento1['8x']} onChange={({target}) => {setRecebimento1({...recebimento1, "8x":target.value})}}/>
                    </label>
                    <label htmlFor="9x1">9x:
                        <input type="number" name="9x1" id="9x1" value={recebimento1['9x']} onChange={({target}) => {setRecebimento1({...recebimento1, "9x":target.value})}}/>
                    </label>
                    <label htmlFor="10x1">10x:
                        <input type="number" name="10x1" id="10x1" value={recebimento1['10x']} onChange={({target}) => {setRecebimento1({...recebimento1, "10x": target.value})}}/>
                    </label>
                    <label htmlFor="11x1">11x:
                        <input type="number" name="11x1" id="11x1" value={recebimento1['11x']} onChange={({target}) => {setRecebimento1({...recebimento1, "11x":target.value})}}/>
                    </label>
                    <label htmlFor="12x1">12x:
                        <input type="number" name="12x1" id="12x1" value={recebimento1['12x']} onChange={({target}) => {setRecebimento1({...recebimento1, "12x":target.value})}}/>
                    </label>
                </div>}
                {quinze && <div>
                    <h3>Taxas para 15 dias</h3>
                    <label htmlFor="avista2">À vista:
                        <input type="number" name="avista2" id="avista2" value={recebimento15['avista']} onChange={({target}) => {setRecebimento15({...recebimento15, "avista":target.value})}}/>
                    </label>
                    <label htmlFor="2x2">2x:
                        <input type="number" name="2x2" id="2x2" value={recebimento15['2x']} onChange={({target}) => {setRecebimento15({...recebimento15, "2x":target.value})}}/>
                    </label>
                    <label htmlFor="3x2">3x:
                        <input type="number" name="3x2" id="3x2" value={recebimento15['3x']} onChange={({target}) => {setRecebimento15({...recebimento15, "3x":target.value})}}/>
                    </label>
                    <label htmlFor="4x2">4x:
                        <input type="number" name="4x2" id="4x2" value={recebimento15['4x']} onChange={({target}) => {setRecebimento15({...recebimento15, "4x":target.value})}}/>
                    </label>
                    <label htmlFor="5x2">5x:
                        <input type="number" name="5x2" id="5x2" value={recebimento15['5x']} onChange={({target}) => {setRecebimento15({...recebimento15, "5x":target.value})}}/>
                    </label>
                    <label htmlFor="6x2">6x:
                        <input type="number" name="6x2" id="6x2" value={recebimento15['6x']} onChange={({target}) => {setRecebimento15({...recebimento15, "6x":target.value})}}/>
                    </label>
                    <label htmlFor="7x2">7x:
                        <input type="number" name="7x2" id="7x2" value={recebimento15['7x']} onChange={({target}) => {setRecebimento15({...recebimento15, "7x":target.value})}}/>
                    </label>
                    <label htmlFor="8x2">8x:
                        <input type="number" name="8x2" id="8x2" value={recebimento15['8x']} onChange={({target}) => {setRecebimento15({...recebimento15, "8x":target.value})}}/>
                    </label>
                    <label htmlFor="9x2">9x:
                        <input type="number" name="9x2" id="9x2" value={recebimento15['9x']} onChange={({target}) => {setRecebimento15({...recebimento15, "9x":target.value})}}/>
                    </label>
                    <label htmlFor="10x2">10x:
                        <input type="number" name="10x2" id="10x2" value={recebimento15['10x']} onChange={({target}) => {setRecebimento15({...recebimento15, "10x":target.value})}}/>
                    </label>
                    <label htmlFor="11x2">11x:
                        <input type="number" name="11x2" id="11x2" value={recebimento15['11x']} onChange={({target}) => {setRecebimento15({...recebimento15, "11x":target.value})}}/>
                    </label>
                    <label htmlFor="12x2">12x:
                        <input type="number" name="12x2" id="12x2" value={recebimento15['12x']} onChange={({target}) => {setRecebimento15({...recebimento15, "12x":target.value})}}/>
                    </label>
                </div>}
                {trinta && <div>
                    <h3>Taxas para 30 dias</h3>
                    <label htmlFor="avista3">À vista:
                        <input type="number" name="avista3" id="avista3" value={recebimento30['avista']} onChange={({target}) => {setRecebimento30({...recebimento30, "avista":target.value})}}/>
                    </label>
                    <label htmlFor="2x3">2x:
                        <input type="number" name="2x3" id="2x3" value={recebimento30['2x']} onChange={({target}) => {setRecebimento30({...recebimento30, "2x":target.value})}}/>
                    </label>
                    <label htmlFor="3x3">3x:
                        <input type="number" name="3x3" id="3x3" value={recebimento30['3x']} onChange={({target}) => {setRecebimento30({...recebimento30, "3x":target.value})}}/>
                    </label>
                    <label htmlFor="4x3">4x:
                        <input type="number" name="4x3" id="4x3" value={recebimento30['4x']} onChange={({target}) => {setRecebimento30({...recebimento30, "4x":target.value})}}/>
                    </label>
                    <label htmlFor="5x3">5x:
                        <input type="number" name="5x3" id="5x3" value={recebimento30['5x']} onChange={({target}) => {setRecebimento30({...recebimento30, "5x":target.value})}}/>
                    </label>
                    <label htmlFor="6x3">6x:
                        <input type="number" name="6x3" id="6x3" value={recebimento30['6x']} onChange={({target}) => {setRecebimento30({...recebimento30, "6x":target.value})}}/>
                    </label>
                    <label htmlFor="7x3">7x:
                        <input type="number" name="7x3" id="7x3" value={recebimento30['7x']} onChange={({target}) => {setRecebimento30({...recebimento30, "7x":target.value})}}/>
                    </label>
                    <label htmlFor="8x3">8x:
                        <input type="number" name="8x3" id="8x3" value={recebimento30['8x']} onChange={({target}) => {setRecebimento30({...recebimento30, "8x":target.value})}}/>
                    </label>
                    <label htmlFor="9x3">9x:
                        <input type="number" name="9x3" id="9x3" value={recebimento30['9x']} onChange={({target}) => {setRecebimento30({...recebimento30, "9x":target.value})}}/>
                    </label>
                    <label htmlFor="10x3">10x:
                        <input type="number" name="10x3" id="10x3" value={recebimento30['10x']} onChange={({target}) => {setRecebimento30({...recebimento30, "10x":target.value})}}/>
                    </label>
                    <label htmlFor="11x3">11x:
                        <input type="number" name="11x3" id="11x3" value={recebimento30['11x']} onChange={({target}) => {setRecebimento30({...recebimento30, "11x":target.value})}}/>
                    </label>
                    <label htmlFor="12x3">12x:
                        <input type="number" name="12x3" id="12x3" value={recebimento30['12x']} onChange={({target}) => {setRecebimento30({...recebimento30, "12x":target.value})}}/>
                    </label>
                </div>}
            </div>
        </form>
        <button>Atualizar</button>
    </div>
  )
}

export default EditPlano