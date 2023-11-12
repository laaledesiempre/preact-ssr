import {h, Fragment} from 'preact'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  )
}
