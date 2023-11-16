// Todo
import {createUser, createPost, getPostById, getUserData} from '../functions/database/index.js'
import {ROLES} from '../configs/constants'
import {Router} from 'express'
import jsonwebtoken from 'jsonwebtoken'

const dbRouter= Router()

dbRouter.post("/crate/post",(req,res)=>{
    const {content} = req.body
    const username = req.username
    createPost(username, content)
    res.send("Data sent")
})

dbRouter.post("/create/user",(req,res)=>{
    const {username, password} = req.body
    // need to add hashing and stuff TODO
    createUser(username,password,ROLES.USER)
    res.send("Data sent")
})

dbRouter.post("/login",(req,res)=>{
    const {username, password} = req.body
    const user = getUserData(username)
    if (user.password == password) { //need to add hashing and stuff TODO
        const token = jsonwebtoken.sign(username, SECRET)
        req.json({token})
    } 
})

dbRouter.delete("/delete/post/:id",(req,res)=>{
    const {id} = req.params
    const post = getPostById(id)
    post.username === req.username && deletePost(post_id) //TODO
    res.send("Data sent")
})

dbRouter.put("/change/post/:id",(req,res)=>{
    const {id} = req.params
    const post = getPostById(id)
    post.username === req.username && updatePost(id, content) //TODO
    res.send("Data sent")
})

dbRouter.get("/api/",(req,res)=>{
  res.send()  
})

export {dbRouter}