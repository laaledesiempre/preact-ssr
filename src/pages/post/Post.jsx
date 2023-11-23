import {h, Fragment} from 'preact'
import { useState } from 'react'
import { Style } from '../../components/Style'
import axios from 'axios'

export const Post= ()=>{
    const handleSubmit=(e)=>{
        const {content} = e.target
        e.preventDefault()
        axios.post("./db/create/post",{
            content: content.value
        },{
        headers: {
        'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
        }}
        ).then(
            response=>console.log(response)
        )
        .catch(
            err=>console.log(err)
        )
    }
    return(
        <>
        <dialog id="post-dialog">
            <form onSubmit={e=>handleSubmit(e)}>
                <textarea id="content"/>
                <button type="submit">Post!</button>
            </form>
        </dialog> {/*Test if this works!*/}
        <button class="post-button" onClick={
            e=>document.querySelector("#post-dialog")
            .showModal()}> Show post dialog </button>
        </>
    )
}

