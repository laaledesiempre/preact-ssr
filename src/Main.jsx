import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Style } from './components/index.js'

export const Main=()=>{
  return(
    <>
      <App />
      <Style name="main.css" /> 
    </>
  )
}

export const MainHydrate=()=>{
  return(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}
