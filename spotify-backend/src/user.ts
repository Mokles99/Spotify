import mongoose from './database';

const userSchema = new mongoose.Schema({
  refreshToken: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

export default User;
