import {h, Fragment} from 'preact'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/index.js'
import { Home, Register, Login, createPost } from './pages/index.js'

export const App = () => {
  return (
 <> 
    <Nav />
    <main>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/post" element={<createPost/>} />
    </Routes>
    </main>
    </>
  )
}
