// Tables creation

export const USER_TABLE_CREATION_QUERY =`
  CREATE TABLE IF NOT EXISTS 
    users(
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL);`

export const POSTS_TABLE_CREATION_QUERY =`
  CREATE TABLE IF NOT EXISTS 
    posts(
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      content TEXT NOT NULL);`

export const AUTH_TABLE_CREATION_QUERY =`
  CREATE TABLE IF NOT EXISTS 
    auth(
      refresh_key TEXT PRIMARY KEY,
      jwt TEXT NOT NULL UNIQUE );`

// Create

export const CREATE_USER_QUERY = `
  INSERT INTO 
    users(username,password,role) 
    VALUES (?,?,?);`

export const CREATE_POST_QUERY =`
  INSERT INTO
    posts(username,content)
    VALUES (?,?);`

export const CREATE_AUTH_ENTRY_QUERY=`
  INSERT INTO
    auth(refresh_key,jwt)
    VALUES(?,?);`

// Delete    

export const DELETE_USER_QUERY = `
  DELETE FROM users WHERE username=?;`

export const DELETE_POST_QUERY = `
  DELETE FROM posts WHERE id=?;`

// Update

export const UPDATE_PASSWORD_QUERY =`
  UPDATE users 
    SET password=?
    WHERE id=?;`

export const UPDATE_POST_QUERY =`
  UPDATE posts
    SET content=?
    WHERE id=?;`

// Read    

export const GET_ALL_POSTS_QUERY=`
  SELECT * FROM posts;`
export const GET_USER_DATA_QUERY=`
  SELECT * FROM users WHERE username=?;`

export const GET_POST_BY_USERNAME_QUERY=`
  SELECT * FROM posts WHERE username=?;`

export const GET_POST_BY_ID_QUERY=`
  SELECT * FROM posts WHERE id=?;`
