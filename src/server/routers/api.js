import {getAllPosts,getPostById,getPostByUsername} from '../functions/database/index.js'
import {Router} from 'express'

const apiRouter = Router()

apiRouter.get("/posts",(req,res)=>{
  const posts= await getAllPosts()
  res.json(posts)
})

apiRouter.get("/post/:id",(req,res)=>{
  const post= await getPostById()
  res.json(post)
})

apiRouter.get("/post/user/:username",(req,res)=>{
  const post= await getPostByUsername(username)
  res.json(post)
})

export {apiRouter}