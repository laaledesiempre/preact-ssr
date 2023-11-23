import { h, Fragment } from 'preact'
import { Style } from '../../components/index.js'
import axios from 'axios'

export const Cards =(props)=>{
  const handleDelete=()=>{
  axios.delete("./db/delete/post/"+props.id,{
      headers:{
        'Authorization': "Bearer "+window.sessionStorage.getItem('token')
      }
    })
    .then(response=>console.log(response)) 
    .catch(err=>alert(err))
  }
  return(
  <article>
    <h6>{props.username}</h6>
    <p>{props.content}</p>
    <button onClick={()=>handleDelete()}>Delete</button>
  </article>
  )
}

