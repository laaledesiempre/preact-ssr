import {h, Fragment} from 'preact'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/index.js'
import { Home, Register, Login,Post } from './pages/index.js'
import { useContext, useEffect } from 'preact/hooks'
import axios from 'axios'
import { StoreContext } from './Main'
import { reloadPosts } from './components/utils/reloadPosts.js'

export const App = () => {
    const {user, setUser, setNotes} = useContext(StoreContext)

    useEffect(async()=>{
    const posts= await reloadPosts()
    posts ? setNotes(posts.reverse()) : setNotes([])
  }
    ,[])

    useEffect(()=>{
    if (window.sessionStorage.getItem('token')) {
    axios.get("./db/info",{headers:{
      'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
    }})
      .then(res=>setUser(res.data.username))
      .catch(err=>{alert(err)})
  }},[])
  return (
 <> 
    <Nav />
    <main>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/post" element={<Post/>} />
    </Routes>
    {user && <Post />}
    </main>
    </>
  )
}
