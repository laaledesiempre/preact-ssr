import { db } from "../../db"
import { CREATE_AUTH_ENTRY_QUERY, CREATE_POST_QUERY, CREATE_USER_QUERY } from "../../db/queries"
import { handleError } from "../utils"

/**
 * excecutes an SQL query to create an user on database.
 *
 * @param {username} String - username to register.
 * @param {password} String - hashed password to store.
 * @param {role} String - role to assign.
 */
export const createUser= (username,password,role)=>{
  db.run(CREATE_USER_QUERY, [username, password ,role],(e)=>handleError(e))
}

/**
 * excecutes an SQL query to create an user on database.
 *
 * @param {username} String - post creator username.
 * @param {content} String - post content.
 */
export const createPost= (username, content)=>{
  db.run(CREATE_POST_QUERY, [username, content], (e)=>handleError(e))
}

/**
 * excecutes an SQL query to store a key to access a token.
 *
 * @param {refreshKey} String - key to access the token.
 * @param {jwt} String - token to store.
 */
export const createAuthEntry= (refreshKey,jwt)=>{
  db.run(CREATE_AUTH_ENTRY_QUERY,[refreshKey,jwt],(e)=>handleError(e))
}
