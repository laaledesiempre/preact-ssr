import { db } from "../../db"
import { UPDATE_PASSWORD_QUERY, UPDATE_POST_QUERY } from "../../db/queries"
import { handleError } from "../utils"

/**
 * excecutes a sql query to the db to update an user's password.
 *
 * @param {newPassword} String - new user's password.
 * @param {userId} Number - user's ID.
 */
export const updatePassword =(newPassword,userId)=>{
  db.run(UPDATE_PASSWORD_QUERY,[newPassword,userId],(e)=>{handleError(e)})
}

/**
 * excecutes a sql query to the db to update a post content.
 *
 * @param {newContent} String - new post's content.
 * @param {postId} Number - post's ID.
 */
export const updatePost =(newContent,postId) =>{
  db.run(UPDATE_POST_QUERY,[newContent,postId],(e)=>{handleError(e)})
}
