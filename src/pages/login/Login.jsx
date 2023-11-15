import {h, Fragment} from 'preact'

export const Login = () => {
  return (
    <>
      <form>
        <label for='username'>Username</label>
        <input type='text' id='username' />
        <label for='password'>Password </label>
        <input type='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
