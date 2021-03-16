import jwt from 'jsonwebtoken'
import client from '../../client'

export const getUser = async (token) => {
    try {
        console.log('Token ', token)
        if(!token) {
            return null
        }

        const id = await jwt.verify(token, process.env.SECRET_KEY)
        const user = await client.user.findUnique({where: {id: +id}})
        return user ? user : null
    } catch (e) {
        return null
    }
}