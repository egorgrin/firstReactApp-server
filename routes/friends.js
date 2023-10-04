import express from 'express';
import {getFriends} from '../controllers/users.js';


const router = express.Router();

router.get('/', getFriends);

export default router;