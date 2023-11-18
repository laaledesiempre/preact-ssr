import {createUser, createPost, createAuthEntry} from './create'
import {getAllPosts, getUserData, getPostById, getPostsByUsername} from './read'
import {deleteUser, deletePost} from './delete'
import {updatePassword, updatePost} from './update'

export {
    createUser,
    createPost,
    createAuthEntry,
    getAllPosts,
    getUserData,
    getPostById,
    updatePassword,
    updatePost,
    deleteUser,
    deletePost,
    getPostsByUsername
}
