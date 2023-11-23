import { db } from "../../db"
import { DELETE_POST_QUERY, DELETE_USER_QUERY } from "../../db/queries"
import { handleError } from "../utils"

export const deleteUser =(username)=>{
  db.run(DELETE_USER_QUERY,[username],(e)=>{handleError(e)})
}

export const deletePost =(post_id)=>{
  db.run(DELETE_POST_QUERY,[post_id],(e)=>{handleError(e)})
}
