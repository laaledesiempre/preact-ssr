import {getAllPosts,getPostById,getPostsByUsername} from '../functions/database/index.js'
import {Router} from 'express'

const apiRouter = Router()

// Get all posts
apiRouter.get(
  "/posts",
  async (req,res)=>{
  const posts= await getAllPosts()
  res.json(posts)
  }
)

// Get a post by its ID
apiRouter.get(
  "/post/:id",
  async(req,res)=>{
  const post= await getPostById()
  res.json(post)
  }
)

// Get posts by its username
apiRouter.get(
  "/post/user/:username",
  async(req,res)=>{
  const post= await getPostsByUsername(username)
  res.json(post)
  }
)

export {apiRouter}
