import {h, Fragment} from 'preact'

import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'

export const App = () => {
  return (
 <> 
    <Nav />
    <Routes>
      <Route path="/a" element={<div>a</div>} />
      <Route path="/b" element={<div>b</div>} />
    </Routes>
    </>
  )
}
