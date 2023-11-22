import {h, Fragment} from 'preact'
import { useContext } from 'preact/hooks'
import { NavLink } from 'react-router-dom'
import { StoreContext } from '../../Main'
import { Style } from '../utils/Style'

export const Nav = () => {
  const {user} = useContext(StoreContext)
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <div class="username">{user}</div>
      <Style name="nav.css" />
    </header>
  )
}
