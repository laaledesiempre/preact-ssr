import {h, Fragment} from 'preact'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <header>
      <nav>
        <NavLink to="b">To B</NavLink>
        <NavLink to="a">To A</NavLink>
      </nav>
    </header>
  )
}
