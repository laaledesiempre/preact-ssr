import { db } from "../../db"
import { DELERE_POST_QUERY, DELETE_USER_QUERY } from "../../db/queries"
import { handleError } from "../utils"

export const deleteUser =(username)=>{
  db.run(DELETE_USER_QUERY,[username],handleError(e))
}

export const deletePost =(post_id)=>{
  db.run(DELERE_POST_QUERY,[post_id],handleError(e))
}
