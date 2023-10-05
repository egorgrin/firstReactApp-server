import express from 'express';
import {createUser, getUsers, getUser} from '../controllers/users.js';
import {authorise} from '../controllers/auth.js';


const router = express.Router();

router.put('/', authorise);

export default router;