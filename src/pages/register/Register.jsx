import {h, Fragment} from 'preact'
import axios from 'axios'

export const Register= () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    const {username, password} =e.target
    axios.post(
      "./db/create/user",
      {
        username: username.value,
        password: password.value
      }
    ).then((response)=>{
      console.log(response)
      location.replace("./login")
    }).catch((err)=>{
      alert(err)
    })
  }
  return (
    <>
      <form class="auth-form" onSubmit={(e)=>{handleSubmit(e)}}>
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
