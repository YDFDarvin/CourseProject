import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  balance: { type: Number },
  password: { type: String, required: true },
  login: { type: String, required: true },
  email: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});