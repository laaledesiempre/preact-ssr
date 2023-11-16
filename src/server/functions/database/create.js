import { db } from "../../db"
import { CREATE_AUTH_ENTRY_QUERY, CREATE_POST_QUERY, CREATE_USER_QUERY } from "../../db/queries"
import { handleError } from "../utils"

export const createUser= (username,password,role)=>{
  db.run(CREATE_USER_QUERY, [username, password ,role],handleError(e))
}

export const createPost= (username, content)=>{
  db.run(CREATE_POST_QUERY, [username, content], handleError(e))
}

export const createAuthEntry= (refreshKey,jwt)=>{
  db.run(CREATE_AUTH_ENTRY_QUERY,[refreshKey,jwt],handleError(e))
}
