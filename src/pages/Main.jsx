import {h, Fragment} from 'preact'
import { useState } from 'preact/hooks'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export const Main=()=>{
  const [count,setCount] = useState(0)
  return(
    <>
    Hello it seems to work!
    <div>
        <button onClick={()=>alert("hola!")}>-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
    <Routes>
      <Route path="/a" element={<div>a</div>} />
      <Route path="/b" element={<div>b</div>} />
    </Routes>
  </>
  )
}
