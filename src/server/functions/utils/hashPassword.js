import bcrypt from 'bcrypt'

export const hashPassword= (password)=>{
   bcrypt.hash(password,12,(err, hash) => {
    if (!err){
      return hash
    }});
}
