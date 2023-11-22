import { h, Fragment, createContext } from 'preact'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Style } from './components/index.js'
import { useState, useMemo} from 'preact/hooks'

export const StoreContext= createContext()

export const Main=()=>{
  

  const [user, setUser] =useState(null)

  const store= useMemo(()=>{
    return {user, setUser}
  },[user])

  return(
    <>
      <StoreContext.Provider value={store}>
      <App />
      </StoreContext.Provider>
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
