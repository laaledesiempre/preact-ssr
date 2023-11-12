import {h, Fragment} from 'preact'
import { useState } from 'preact/hooks'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { App } from './App'

export const Main=()=>{
  return(
    <>
      <App/>
  </>
  )
}

export const MainHydrate=()=>{
  return(
  <BrowserRouter>
      <Main/>
  </BrowserRouter>
  )
}
