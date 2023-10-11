import {model, Schema} from 'mongoose';

const userSchema = new Schema ({
  id: {type: String, unique: true, required: true},
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true},

  firstname: String,
  lastname: String,
  sex: String,
  avatar: String,
  dob: String,
  country: String,

  followers: Array,
  friends: Array,
});

const User = model('User', userSchema);

export default User;
