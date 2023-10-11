import jwt from 'jsonwebtoken';
import config from './config.js'

export const generateAccessToken = (id, role) => {
    const payload = {
      id,
      role
    }
    return jwt.sign(payload, config.key, {expiresIn: '24h'})
}