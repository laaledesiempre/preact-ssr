
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
  db.get(GET_USER_DATA_QUERY,[username],(_e,rows)=>{
    user=rows
  })
  return user
}
