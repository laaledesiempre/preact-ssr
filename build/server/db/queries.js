// Tables creation
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AUTH_TABLE_CREATION_QUERY: function() {
        return AUTH_TABLE_CREATION_QUERY;
    },
    CREATE_AUTH_ENTRY_QUERY: function() {
        return CREATE_AUTH_ENTRY_QUERY;
    },
    CREATE_POST_QUERY: function() {
        return CREATE_POST_QUERY;
    },
    CREATE_USER_QUERY: function() {
        return CREATE_USER_QUERY;
    },
    DELETE_POST_QUERY: function() {
        return DELETE_POST_QUERY;
    },
    DELETE_USER_QUERY: function() {
        return DELETE_USER_QUERY;
    },
    GET_ALL_POSTS_QUERY: function() {
        return GET_ALL_POSTS_QUERY;
    },
    GET_POST_BY_ID_QUERY: function() {
        return GET_POST_BY_ID_QUERY;
    },
    GET_POST_BY_USERNAME_QUERY: function() {
        return GET_POST_BY_USERNAME_QUERY;
    },
    GET_USER_DATA_QUERY: function() {
        return GET_USER_DATA_QUERY;
    },
    POSTS_TABLE_CREATION_QUERY: function() {
        return POSTS_TABLE_CREATION_QUERY;
    },
    UPDATE_PASSWORD_QUERY: function() {
        return UPDATE_PASSWORD_QUERY;
    },
    UPDATE_POST_QUERY: function() {
        return UPDATE_POST_QUERY;
    },
    USER_TABLE_CREATION_QUERY: function() {
        return USER_TABLE_CREATION_QUERY;
    }
});
var USER_TABLE_CREATION_QUERY = "\n  CREATE TABLE IF NOT EXISTS \n    users(\n      id INTEGER PRIMARY KEY,\n      username TEXT NOT NULL UNIQUE,\n      password TEXT NOT NULL,\n      role TEXT NOT NULL);";
var POSTS_TABLE_CREATION_QUERY = "\n  CREATE TABLE IF NOT EXISTS \n    posts(\n      id INTEGER PRIMARY KEY,\n      username TEXT NOT NULL,\n      content TEXT NOT NULL);";
var AUTH_TABLE_CREATION_QUERY = "\n  CREATE TABLE IF NOT EXISTS \n    auth(\n      refresh_key TEXT PRIMARY KEY,\n      jwt TEXT NOT NULL UNIQUE );";
var CREATE_USER_QUERY = "\n  INSERT INTO \n    users(username,password,role) \n    VALUES (?,?,?);";
var CREATE_POST_QUERY = "\n  INSERT INTO\n    posts(username,content)\n    VALUES (?,?);";
var CREATE_AUTH_ENTRY_QUERY = "\n  INSERT INTO\n    auth(refresh_key,jwt)\n    VALUES(?,?);";
var DELETE_USER_QUERY = "\n  DELETE FROM users WHERE username=?;";
var DELETE_POST_QUERY = "\n  DELETE FROM posts WHERE id=?;";
var UPDATE_PASSWORD_QUERY = "\n  UPDATE users \n    SET password=?\n    WHERE id=?;";
var UPDATE_POST_QUERY = "\n  UPDATE posts\n    SET content=?\n    WHERE id=?;";
var GET_ALL_POSTS_QUERY = "\n  SELECT * FROM posts;";
var GET_USER_DATA_QUERY = "\n  SELECT * FROM users WHERE username=?;";
var GET_POST_BY_USERNAME_QUERY = "\n  SELECT * FROM posts WHERE username=?;";
var GET_POST_BY_ID_QUERY = "\n  SELECT * FROM posts WHERE id=?;";
