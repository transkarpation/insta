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

export const protectedResolver = (ourResolver) => (root, args, context, info) => {
    if(!context.user) {
        return {
            ok: false,
            error: "Pleas log in to perform this action"
        }
    }

    return ourResolver(root, args, context, info)
}