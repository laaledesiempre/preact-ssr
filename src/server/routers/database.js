// Todo

import {Router} from 'express'

const dbRouter= Router()

dbRouter.post("/crate/post",(req,res)=>{
    const {content} = req.body
    const note = createNote(req.username, content) //TODO
    addNote(note) //TODO
    res.send("Data sent")
})

dbRouter.delete("/delete/post/:id",(req,res)=>{
    const post = getPostById(id)
    post.username === req.username && deleteNote(id) //TODO
    res.send("Data sent")
})

dbRouter.put("/change/post/:id",(req,res)=>{
    const post = getPostById(id)
    post.username === req.username && updatePost(id, content) //TODO
    res.send("Data sent")
})

dbRouter.get("/api/",(req,res)=>{
  res.send()  
})

export {dbRouter}