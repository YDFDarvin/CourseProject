import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: String,
  readonly balance: Number,
  readonly password: String,
  readonly login: String,
  readonly email: String,
  readonly created_on: Date,
  readonly updated_at: Date
}