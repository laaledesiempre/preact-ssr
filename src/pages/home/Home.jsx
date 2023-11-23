import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Cards, Style } from '../../components/index.js'
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
      <section class="cards-wrapper">
      {
        notes.map((e)=>{
          return( <Cards username={e.username} content={e.content} id={e.id}/> )
        })
      }
      </section>
      <Style name="home.css"/>
      <Style name="cards.css"/>
    </>
  )
}
