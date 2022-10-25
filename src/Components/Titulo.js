import React from 'react'

export default function Titulo(props) {
    const estilos = {
        color: "white",
        backgroundColor: "DodgerBlue",        
    }
  return (
    <>
    <h1 style={{color: "red"}}>Hola {props.nombre}</h1>
    <h1 style={estilos}>Hola como esta</h1>
    <h2>Hola que tal</h2>
    <h3 id='miTitulo'>Hola adios</h3>
    </>
  )
}
