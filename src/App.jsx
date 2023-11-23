import {h, Fragment} from 'preact'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/index.js'
import { Home, Register, Login,Post } from './pages/index.js'
import { useContext, useEffect } from 'preact/hooks'
import axios from 'axios'
import { StoreContext } from './Main'
// Please clean this fucking mess up please!
export const App = () => {
    const {user, setUser} = useContext(StoreContext)
    useEffect(()=>{
    axios.get("./db/info",{headers:{
      'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
    }})
      .then(res=>setUser(res.data.username))
      .catch(err=>console.log(err))
  },[])
  return (
 <> 
    <Nav />
    <main>  
    <Routes>
      <Route path="/" element={<Home />} />
      {!user && <Route path="/login" element={<Login />} />}
      {!user && <Route path="/register" element={<Register/>} />}
      <Route path="/post" element={<Post/>} />
    </Routes>
    </main>
    </>
  )
}
