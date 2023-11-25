import { h, Fragment } from 'preact'
import { Style } from '../../components/index.js'
import axios from 'axios'
import { EditPost } from '../editPosts/EditPosts'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Main'
import { TrashIcon } from '../icons/'
import { reloadPosts } from '../utils/reloadPosts.js'

export const Cards =(props)=>{
  const {user, setNotes} = useContext(StoreContext)
  const handleDelete=()=>{
  axios.delete("./db/delete/post/"+props.id,{
      headers:{
        'Authorization': "Bearer "+window.sessionStorage.getItem('token')
      }
    })
    .then(async(_response)=>{
        const posts= await reloadPosts()
        posts && setNotes(posts.reverse()) 
}) 
    .catch(err=>{
        alert(err)
      })
  }
  return(
  <article>
    <h6>{props.username} says:</h6>
    <p>{props.content}</p>
    {user === props.username && <button class="delete-button" onClick={()=>handleDelete()}>{<TrashIcon/>}</button>}
    {user === props.username && <EditPost id={props.id} />}
  </article>
  )
}

