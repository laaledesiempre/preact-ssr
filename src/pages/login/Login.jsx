import {h, Fragment} from 'preact'
import axios from 'axios'

export const Login = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    const {username, password} =e.target
    
    axios.post(
      "./db/login",
      {
        username: username.value,
        password: password.value
      }
    ).then((response)=>{
      window.sessionStorage.setItem("token",response.data.token)
      location.replace("./")
    }).catch((err)=>{
      alert(err)
    })
  }
  return (
    <>
      <form class="auth-form" onSubmit={(e)=>{handleSubmit(e)}}>
        <label for='username'>Username</label>
        <input type='text' id='username' />
        <label for='password'>Password </label>
        <input type='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
