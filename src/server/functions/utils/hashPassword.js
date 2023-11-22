import bcrypt from 'bcrypt'

export const hashPassword= (password)=>{
  return new Promise ((resolve,reject)=>{
    bcrypt.hash(password,12,(err, hash) => {
    if (!err){
      resolve(hash)
    }});
  }) 
  
}
