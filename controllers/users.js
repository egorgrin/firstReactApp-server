import User from '../models/User.js';

export const getUsers = async (req, res) => {
  console.log(req.body);
  try {
    const users = await User.find().limit(50);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
};

export const getUser = async (req, res) => {
  // console.log(req);
  try {
    const users = await User.findOne({id: req.params.id});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
};