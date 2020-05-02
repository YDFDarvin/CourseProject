import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  user_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});