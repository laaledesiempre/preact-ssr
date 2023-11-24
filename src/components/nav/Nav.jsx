import {h, Fragment} from 'preact'
import { useContext } from 'preact/hooks'
import { NavLink } from 'react-router-dom'
import { StoreContext } from '../../Main'
import { Style } from '../utils/Style'

export const Nav = () => {
  const {user} = useContext(StoreContext)
  const handleLogout=()=>{
    window.sessionStorage.removeItem('token')
    location.reload()
  }
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {!user && <NavLink to="/login">Login</NavLink>}
        {!user &&<NavLink to="/register">Register</NavLink>}
      </nav>
        {user && <button onClick={e=>handleLogout()}>Log Out</button>}
      <Style name="nav.css" />
    </header>
  )
}
