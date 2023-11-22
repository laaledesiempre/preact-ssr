import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Style } from '../../components/index.js'
import axios from 'axios'

export const Home = () => {
  const [notes, setNotes] = useState([])

  useEffect(()=>{
    axios.get("./api/posts")
    .then(
      (response)=>{
          console.log(response.data)
      setNotes(response.data)
    })
    .catch(err=>alert(err))
  }
  ,[])

  return (
    <>
      <h1>Welcome to laaledesiempre's guest book!</h1>
      <p>This is currently a guest book where you can leave a message!</p>
      <div class="note_wrapper">
      {
        notes.map((e)=>{
          return(<>
            <h6>{e.username}</h6>
            <p>{e.content}</p>
          </>)
        })
      }
      </div>
      <Style name="home.css"/>
    </>
  )
}
