import express from 'express';
import {getFriends} from '../controllers/friends.js';


const router = express.Router();

router.get('/', getFriends);

export default router;