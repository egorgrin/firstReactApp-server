import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema ({
  id: String,
  firstName: String,
  lastName: String,
  dob: String,
  country: String,
  followers: Array,
  friends: Array,
});

const User = mongoose.model('User', userSchema);

export default User;
