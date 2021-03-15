import jwt from 'jsonwebtoken'

const secret = process.env.SECRET_KEY

export const sign = (payload) => jwt.sign(payload, secret)
export const decode = (payload) => jwt.decode(payload, secret)