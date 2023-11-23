import bcrypt from 'bcrypt'
export const comparePassword =(plainTextPassword, user)=>{
  if (!user) return false
  return new Promise ((resolve,reject)=>{
    bcrypt.compare(plainTextPassword, user.password, (err,res)=>{
      err && reject(err)
      resolve(res)
    })
  })
}
