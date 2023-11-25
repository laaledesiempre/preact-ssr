import axios from 'axios'
import {h, Fragment} from 'preact'
import { Pencil } from '../icons'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../Main'
import { reloadPosts } from '../utils/reloadPosts'

export const EditPost = (props)=>{
  const {setNotes} = useContext(StoreContext)
  const handleSubmit=(e)=>{

    e.preventDefault()
    const {value:content} = e.target.editDialogContent
    axios.put("./db/change/post/"+ props.id, {content}, {
      headers: {
        'Authorization': "Bearer "+ window.sessionStorage.getItem('token')
      }
    }). then(async(response)=>{
      document.querySelector("#edit-dialog"+props.id).close()
      const posts= await reloadPosts()
      setNotes(posts.reverse())
      })
    .catch(err=>alert(err))
  }
  return(
    <>
  <dialog id={"edit-dialog"+props.id}>
      <form onSubmit={e=>handleSubmit(e)}>
    <textarea id="editDialogContent"/>
      <button type='submit'>Edit!</button>
      </form>
      <button onClick={ e=>document.querySelector("#edit-dialog"+props.id).close()}> x </button>
  </dialog>
  <button class="edit-button" onClick={e=>document.querySelector("#edit-dialog"+props.id).showModal()}>{<Pencil/>}</button>
    </>
  )
}
