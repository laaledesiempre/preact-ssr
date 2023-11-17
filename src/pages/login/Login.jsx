import {h, Fragment} from 'preact'
import axios from 'axios'

export const Login = () => {
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
    }).catch((e)=>{
      alert(e)
    })
  }
  return (
    <>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label for='username'>Username</label>
        <input type='text' id='username' />
        <label for='password'>Password </label>
        <input type='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
