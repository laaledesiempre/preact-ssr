import bcrypt from 'bcrypt'

/**
 * Compares a plain text password with its user's hashed password equivalent, return a boolean.
 *
 * @param {plainTextPassword} string - plain text password.
 * @param {user} userRow - User object from DB
 */
export const comparePassword =(plainTextPassword, user)=>{
  if (!user) return false
  return new Promise ((resolve,reject)=>{
    bcrypt.compare(plainTextPassword, user.password, (err,res)=>{
      err && reject(err)
      resolve(res)
    })
  })
}
