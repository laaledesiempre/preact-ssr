import {h, Fragment} from 'preact'
import { useState } from 'react'
import { Style } from '../components/Style'

export const Home = () => {
  const [notes, setNotes] = useState([])
  return (
    <>
      <h1>Welcome to laaledesiempre's guest book!</h1>
      <p>This is currently a guest book where you can leave a message!</p>
      <div class="note_wrapper">
    {
        notes.map((e)=>{
          <>
        <h6>{e.username}</h6>
        <p>{e.note}</p>
          </>
        })
      }
      </div>
      <Style name="home.css"/>
    </>
  )
}
