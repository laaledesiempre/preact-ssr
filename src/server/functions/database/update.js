import { db } from "../../db"
import { UPDATE_PASSWORD_QUERY, UPDATE_POST_QUERY } from "../../db/queries"
import { handleError } from "../utils"

export const updatePassword =(newPassword,userId)=>{
  db.run(UPDATE_PASSWORD_QUERY,[newPassword,userId],(e)=>{handleError(e)})
}

export const updatePost =(newContent,postId) =>{
  db.run(UPDATE_POST_QUERY,[newContent,postId],(e)=>{handleError(e)})
}
