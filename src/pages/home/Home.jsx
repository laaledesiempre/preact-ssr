import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Cards, Style } from '../../components/index.js'
import axios from 'axios'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Main'

export const Home = () => {
  const {notes} =useContext(StoreContext)
   return (
    <>
      <h1>Welcome to laaledesiempre's guest book!</h1>
      <h2>This is currently a guest book where you can leave a message!</h2>
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
