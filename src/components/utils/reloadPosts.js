import axios from 'axios'

export const reloadPosts= ()=>{
  return new Promise ((resolve,reject)=>{
    axios.get("./api/posts")
    .then(
      (response)=>{
        resolve(response.data)
    })
    .catch(err=>alert(err))
    
})
}
