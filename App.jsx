import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponents from './components/ListComponents'
import CartComponents from './components/CartComponents'
import GestioneDati from './components/GestioneDati'
import ModulodiRegistrazione from './components/ModulodiRegistrazione'
import Contatore from './components/Contatore'
import ToDo from './components/ToDO'
import GestionePannelli from './components/GestionePannelli'
import {ContextProvider} from './store/context'

function App() {

  return (
    <ContextProvider>
      <div className="container d-flex">
        {/* <ListComponents></ListComponents>
        <CartComponents></CartComponents> */}
        {/* <GestioneDati></GestioneDati> */}
      </div>
      {/* <ModulodiRegistrazione></ModulodiRegistrazione> */}
      <Contatore></Contatore>
      <ToDo></ToDo>
      <GestionePannelli></GestionePannelli>
    </ContextProvider>
  )
}

export default App
