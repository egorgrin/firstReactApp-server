import User from '../models/User.js';

export const getFriends = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
};