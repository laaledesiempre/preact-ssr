import {h, Fragment} from 'preact'

export const Register= () => {
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
      console.log(response)
    }).catch((e)=>{
      alert(e)
    })
  }
  return (
    <>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
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
