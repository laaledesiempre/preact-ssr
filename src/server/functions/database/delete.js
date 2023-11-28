import { db } from "../../db"
import { DELETE_POST_QUERY, DELETE_USER_QUERY } from "../../db/queries"
import { handleError } from "../utils"

/**
 * excecutes an SQL query to delete an user.
 *
 * @param {username} String - username to delete.
 */
export const deleteUser =(username)=>{
  db.run(DELETE_USER_QUERY,[username],(e)=>{handleError(e)})
}

/**
 * excecutes an SQL query to delete a post.
 *
 * @param {postId} Number - post to delete id.
 */
export const deletePost =(postId)=>{
  db.run(DELETE_POST_QUERY,[postId],(e)=>{handleError(e)})
}
