import React from 'react';
import style from './Footer.module.css'

export function DashFooter() {
const date = new Date();
const ano = date.getFullYear();
  return (
    <div className={style.Dasheboard}>
    <footer>
    <p>&copy;{ano} Calculadora de Taxas</p>
    </footer>
    </div>
  );
}