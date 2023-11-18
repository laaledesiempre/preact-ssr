import {h, Fragment} from 'preact'
import { useState } from 'react'
import { Style } from '../../components/Style'
import axios from axios

export const createPost= ()=>{
    const handleSubmit=(e)=>{
        const {content} = e.target.content
        e.preventDefault()
        axios.post("./db/create/post",{
            content: content.value
        })
        .then(
            response=>console.log(response)
        )
        .catch(
            err=>console.log(err)
        ),{
        headers: {
        'Authorization': 'Bearer '+window.sessionStorage.getItem('token')
  }}

    }
    return(
        <form onSubmit={e=>handleSubmit(e)}>
            <textarea id="content"/>
            <button type="submit">Post!</button>
        </form>
    )
}

