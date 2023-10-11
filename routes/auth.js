import express from 'express';
import {auth, register} from '../controllers/auth.js';
import {check} from 'express-validator';


const router = express.Router();

router.post('/', auth);
router.post('/register', check('username', 'Username should not be empty!').notEmpty(),
    check('password', 'Password should be between 4 and 10 symbols!').isLength({min: 4, max: 10}), register);

export default router;