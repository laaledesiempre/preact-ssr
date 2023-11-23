import { db } from "../../db"
import { GET_POST_BY_USERNAME_QUERY, GET_ALL_POSTS_QUERY, GET_USER_DATA_QUERY, GET_POST_BY_ID_QUERY } from "../../db/queries"

export const getAllPosts= () =>{
  return new Promise((resolve,_reject)=>{
    db.all(GET_ALL_POSTS_QUERY,[],(_e,rows)=>{
    resolve(rows)
  })
  })
}

export const getUserData=(username)=>{
  return new Promise((resolve,_reject)=>{
    db.get(GET_USER_DATA_QUERY,[username],(_e,row)=>{
      resolve(row)
    })
  })
}

export const getPostById=(id)=>{
  return new Promise((resolve,_reject)=>{
  db.get(GET_POST_BY_ID_QUERY,[id],(_e,row)=>{
    resolve(row)
  })
  })
}

export const getPostsByUsername=(username)=>{
  return new Promise((resolve,_reject)=>{
  db.get(GET_POST_BY_USERNAME_QUERY,[username],(_e,rows)=>{
    resolve(rows)
  })
  })
}
