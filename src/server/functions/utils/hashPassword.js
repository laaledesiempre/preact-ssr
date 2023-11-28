import bcrypt from 'bcrypt'
/**
 * Hashes password, return a promise
 *
 * @param {password} string- plain text password.
 */
export const hashPassword= (password)=>{
  return new Promise ((resolve,reject)=>{
    bcrypt.hash(password,12,(err, hash) => {
    if (!err){
      resolve(hash)
    }});
  }) 
  
}
