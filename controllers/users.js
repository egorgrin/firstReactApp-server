import User from '../models/User.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().limit(50);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
};

export const getUser = async (req, res) => {
  // console.log(req.params.id);
  try {
    const users = await User.findOne({ id: req.params.id })
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};