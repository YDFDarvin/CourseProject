import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  warehouse_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});