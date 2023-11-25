import {h, Fragment} from 'preact'
import { useContext } from 'preact/hooks'
import { Style } from '../../components/Style'
import axios from 'axios'
import { Pencil } from '../../components/icons'
import { StoreContext } from '../../Main'
import { reloadPosts } from '../../components/utils/reloadPosts'

export const Post= ()=>{
    const {setNotes} = useContext(StoreContext)
    const handleSubmit=(e)=>{
        const {postDialogContent:content} = e.target
        e.preventDefault()
        axios.post("./db/create/post",{
            content: content.value
        },{
        headers: {
        'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
        }}
        ).then(async(_response)=>{
          document.querySelector("#post-dialog").close()
          const posts= await reloadPosts()
          posts && setNotes(posts.reverse())
       })
        .catch(
            err=>console.log(err)
        )
    }
    return(
        <>
        <dialog id="post-dialog">
            <form onSubmit={e=>handleSubmit(e)}>
                <textarea id="postDialogContent"/>
                <button type="submit">Post!</button>
            </form>
            <button onClick={ e=>document.querySelector("#post-dialog").close()}> x </button>
 
        </dialog> {/*Test if this works!*/}
        <button class="post-button" onClick={
            e=>document.querySelector("#post-dialog")
            .showModal()}> {<Pencil/>}</button>
      <Style name="post.css"/>
        </>
    )
}

