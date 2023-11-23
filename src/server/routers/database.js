import { createUser, createPost, getPostById, getUserData, deletePost } from '../functions/database/index.js'
import { ROLES } from '../configs/constants'
import { Router } from 'express'
import { SECRET } from '../configs/server.js'
import { hashPassword } from '../functions/utils/hashPassword.js'
import { comparePassword } from '../functions/utils/comparePassword.js'
import jsonwebtoken from 'jsonwebtoken'

const dbRouter= Router()

dbRouter.post("/create/post",(req,res)=>{
    const {content} = req.body
    const username = req.username
    username && createPost(username, content)
    res.send("Data sent")
})

dbRouter.post("/create/user",async (req,res)=>{
    const {username, password} = req.body
    let hashedPassword = await hashPassword(password)
    createUser(username,hashedPassword,ROLES.USER)
    res.send("Data sent to create user")
})

dbRouter.post("/login",async(req,res)=>{
    const {username, password} = req.body
    const user = await getUserData(username)
    let passwordCompar= await comparePassword(password, user)
    if (passwordCompar) { 
      const token = jsonwebtoken.sign(username, SECRET)
      res.json({token})
    } else {
      res.sendStatus(401)
    } 
})

dbRouter.delete("/delete/post/:id",async(req,res)=>{
    const {id:post_id} = req.params
    const post = await getPostById(post_id)
    if (post.username === req.username) {
      deletePost(post_id)
      res.sendStatus(200)
    } else {
      res.sendStatus(401)
    }
})

dbRouter.put("/change/post/:id",async(req,res)=>{
    const {id} = req.params
    const post = await getPostById(id)
    post.username === req.username && updatePost(id, content) //TODO
    res.send("Data sent")
})

dbRouter.get("/info",(req,res)=>{
  req.username && console.log(req.username) 
  res.json({username: req.username})  
})

export {dbRouter}

