import jwt from 'jsonwebtoken'

export function generateToken(payload) {
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, "llave secreta", )
    })

}