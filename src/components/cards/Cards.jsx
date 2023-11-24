import { h, Fragment } from 'preact'
import { Style } from '../../components/index.js'
import axios from 'axios'
import { EditPost } from '../editPosts/EditPosts'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Main'

export const Cards =(props)=>{
  const {user} = useContext(StoreContext)
  const handleDelete=()=>{
  axios.delete("./db/delete/post/"+props.id,{
      headers:{
        'Authorization': "Bearer "+window.sessionStorage.getItem('token')
      }
    })
    .then(response=>{console.log(response)
          location.reload() // change this to a reload of messages please!!
}) 
    .catch(err=>alert(err))
  }
  return(
  <article>
    <h6>{props.username}</h6>
    <p>{props.content}</p>
    {user === props.username && <button class="delete-button" onClick={()=>handleDelete()}>Delete</button>}
    {user === props.username && <EditPost id={props.id} />}
  </article>
  )
}

