import  sqlite3  from "sqlite3";
import { USER_TABLE_CREATION_QUERY, POSTS_TABLE_CREATION_QUERY, AUTH_TABLE_CREATION_QUERY } from "./queries";

export const startDatabase = () => {
  const db = new sqlite3.Database('./data.db')
  db.run(USER_TABLE_CREATION_QUERY)
  db.run(POSTS_TABLE_CREATION_QUERY)
  db.run(AUTH_TABLE_CREATION_QUERY)
  return db
}

export const db = startDatabase()




