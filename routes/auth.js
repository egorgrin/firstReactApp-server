import express from 'express';
import {auth, checkAuth, register} from '../controllers/auth.js';
import {check} from 'express-validator';
import checkToken from '../middleware/auth.js';


const router = express.Router();

router.post('/', auth);

router.get('/check', checkToken, checkAuth);

router.post('/register', check('username', 'Username should not be empty!').notEmpty(),
    check('password', 'Password should be between 4 and 10 symbols!').isLength({min: 4, max: 10}), register);

export default router;