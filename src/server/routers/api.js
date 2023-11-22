import {getAllPosts,getPostById,getPostByUsername} from '../functions/database/index.js'
import {Router} from 'express'

const apiRouter = Router()

apiRouter.get("/posts",async (req,res)=>{
  const posts= await getAllPosts()
  res.json(posts)
})

apiRouter.get("/post/:id",async(req,res)=>{
  const post= await getPostById()
  res.json(post)
})

apiRouter.get("/post/user/:username",async(req,res)=>{
  const post= await getPostByUsername(username)
  res.json(post)
})

export {apiRouter}
