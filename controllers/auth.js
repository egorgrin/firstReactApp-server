import User from '../models/User.js';
import Role from '../models/Role.js';
import bcrypt from 'bcryptjs'
import generateUniqueId from '../service/idGenerator.js';
import {validationResult} from 'express-validator';


export const auth = async (req, res) => {
  try {
    const {username, password} = req.body;
    // Находим пользователя по логину в базе данных
    let user = await User.findOne({username});

    if (!user) {
      return res.status(404).json({message: 'User is not found'});
    }
    if (user.password !== password) {
      return res.status(401).json({message: 'Wrong password'});
    }

    // Вход успешен
    return res.status(200).json({message: 'Sign in successful'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Internal server error'});
  }
};

export const register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.errors.map(error => error.msg));
    }
    const {username, password} = req.body;
    const candidate = await User.findOne({username});

    if (candidate) {
      console.log(candidate);
      return res.status(400).json({message: 'User already exists!'});
    }
    const hashedPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({value: 'User'});
    const user = new User({id: generateUniqueId(), username, password: hashedPassword, role: [userRole.value]});

    await user.save();

    return res.status(201).json({message: 'User registered successfully'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Registration failed'});
  }
};