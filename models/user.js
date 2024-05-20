import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase:true,
  },
  password: {
    type: String,
    required:true,
    minLength:6
  },
  
});

export const User = model('User', userSchema);

export async function hashPassword(password) {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password, salt)
}
