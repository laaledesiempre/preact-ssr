import {createUser, createPost, getPostById, getUserData} from '../functions/database/index.js'
import {ROLES} from '../configs/constants'
import {Router} from 'express'
import jsonwebtoken from 'jsonwebtoken'
import { SECRET } from '../configs/server.js'
import { hashPassword } from '../functions/utils/hashPassword.js'

const dbRouter= Router()

dbRouter.post("/crate/post",(req,res)=>{
    const {content} = req.body
    const username = req.username
    username && createPost(username, content)
    res.send("Data sent")
})

dbRouter.post("/create/user",(req,res)=>{
    const {username, password} = req.body
    let hashedPassword = hashPassword(password)
    createUser(username,hashedPassword,ROLES.USER)
    res.send("Data sent to create user")
})

dbRouter.post("/login",async(req,res)=>{
    const {username, password} = req.body
    let hashedPassword = hashPassword(password)
    const user = await getUserData(username)
    if (user && user.password == hashedPassword) { 
    const token = jsonwebtoken.sign(username, SECRET)
        res.json({token})
    } else {
    res.sendStatus(401)
  } 
})

dbRouter.delete("/delete/post/:id",async(req,res)=>{
    const {id} = req.params
    const post = await getPostById(id)
    post.username === req.username && deletePost(post_id) //TODO
    res.send("Data sent")
})

dbRouter.put("/change/post/:id",async(req,res)=>{
    const {id} = req.params
    const post = await getPostById(id)
    post.username === req.username && updatePost(id, content) //TODO
    res.send("Data sent")
})

dbRouter.get("/api/",(req,res)=>{
  res.send()  
})

export {dbRouter}

