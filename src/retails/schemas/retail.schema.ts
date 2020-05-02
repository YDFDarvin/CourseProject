import { Schema } from 'mongoose';

export const RetailSchema = new Schema({
  discount: { type: Number, required: true },
  threshold_quantity: { type: Number, required: true },
  item_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});