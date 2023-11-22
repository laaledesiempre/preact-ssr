import bcrypt from 'bcrypt'
export const comparePassword =(plainTextPassword, hashedPassword)=>{
  return new Promise ((resolve,reject)=>{
    bcrypt.compare(plainTextPassword, hashedPassword, (err,res)=>{
      err && reject(err)
      resolve(res)
    })
  })
}
