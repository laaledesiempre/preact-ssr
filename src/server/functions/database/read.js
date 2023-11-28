import { db } from "../../db"
import { GET_POST_BY_USERNAME_QUERY, GET_ALL_POSTS_QUERY, GET_USER_DATA_QUERY, GET_POST_BY_ID_QUERY } from "../../db/queries"

/**
 * excecutes an SQL query to get all web's posts.
 */
export const getAllPosts= () =>{
  return new Promise((resolve,_reject)=>{
    db.all(GET_ALL_POSTS_QUERY,[],(_e,rows)=>{
    resolve(rows)
    })
  })
}

/**
 * excecutes an SQL query to get user's data, returs an object.
 *
 * @param {username} String - User's username.
 */
export const getUserData=(username)=>{
  return new Promise((resolve,_reject)=>{
    db.get(GET_USER_DATA_QUERY,[username],(_e,row)=>{
      resolve(row)
    })
  })
}

/**
 * excecutes an SQL query to get a post and returns it as an object.
 *
 * @param {id} Number - post ID.
 */
export const getPostById=(id)=>{
  return new Promise((resolve,_reject)=>{
  db.get(GET_POST_BY_ID_QUERY,[id],(_e,row)=>{
    resolve(row)
    })
  })
}

/**
 * excecutes an SQL query to get a specific user's posts and returns an array of them.
 *
 * @param {username} String - User's username.
 */
export const getPostsByUsername=(username)=>{
  return new Promise((resolve,_reject)=>{
  db.get(GET_POST_BY_USERNAME_QUERY,[username],(_e,rows)=>{
    resolve(rows)
    })
  })
}
