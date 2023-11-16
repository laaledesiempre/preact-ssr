
import { GET_ALL_POSTS_QUERY, GET_USER_DATA_QUERY } from "../../db/queries"

export const getAllPosts= () =>{
  let data
  db.all(GET_ALL_POSTS_QUERY,[],(_e,rows)=>{
    data = rows
  })
  return data
}

export const getUserData=(username)=>{
  let user
  db.get(GET_USER_DATA_QUERY,[username],(_e,row)=>{
    user=row
  })
  return user
}

export const getPostById=(id)=>{
  let post
  de.get(GET_POST_BY_ID_QUERY,[id],(_e,row)=>{
    post = row
  })
  return post
}
