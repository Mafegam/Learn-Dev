import jwt from 'jsonwebtoken'; 4

export function generateToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, 'llave secreta',/* {expiresIn: "1h"} no usare la expiracion porque quiero que quede logueado*/
            (error, token) => {
                if (error) {
                    reject({ error });
                } else {
                    resolve({ token }
                    );
                }
            });
    });
}

export function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'llave secreta', (error, decoded) => {
            if (error) {
                reject( error );
            } else {
                resolve( decoded );
            }
        });
    });
}