import {h, Fragment} from 'preact'
import { useContext } from 'preact/hooks'
import { NavLink } from 'react-router-dom'
import { StoreContext } from '../../Main'
import { Style } from '../utils/Style'
import { Logout } from '../icons'

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
        {user && <button class="logout-button" onClick={e=>handleLogout()}>{<Logout/>}</button>}
      <Style name="nav.css" />
    </header>
  )
}
