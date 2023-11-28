// Todo
import jsonwebtoken from 'jsonwebtoken'
import { getBearerAuth } from '../functions/utils'
import { SECRET } from '../configs/server'

export const authMiddleware=(req,res,next)=>{
    const authHeader = req.get('Authorization') 
    if (authHeader && authHeader.toLowerCase().startsWith('bearer')) {
        const token = getBearerAuth(authHeader)
        jsonwebtoken.verify(
            token, 
            SECRET, 
            (err,username)=>{
                if (!err) {
                    req.username = username
                    next()
                } else {
                    req.username=null
                    res.sendStatus(401)
                    next()
                }
            }
        )
    } else {
        req.username=null
        next()
    }
}
