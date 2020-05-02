import { Schema } from 'mongoose';

export const RefundSchema = new Schema({
  refunded: { type: Number, required: true },
  order_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});