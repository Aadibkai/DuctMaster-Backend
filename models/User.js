import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  mobile: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
