import {h, Fragment} from 'preact'

export const Register= () => {
  return (
    <>
      <form>
        <label for='mail'>Mail</label>
        <input type='email' id='mail' />
        <label for='username'>Username</label>
        <input type='text' id='username' />
        <label for='password'>Password </label>
        <input type='password' id='password' />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}
