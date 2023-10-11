import jwt from 'jsonwebtoken';
import config from '../service/config.js';

const {verify} = jwt;


const checkToken = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    // console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(403).json({message: 'Please sing in!'});
    }

    req.user = verify(token, config.key);
    next()
  } catch (e) {
    console.log(e);
    return res.status(403).json({message: 'Please sing in!'});
  }
};

export default checkToken;