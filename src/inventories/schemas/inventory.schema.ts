import { Schema } from 'mongoose';

export const InventorySchema = new Schema({
  amount: { type: Number, required: true },
  item_id: { type: String, required: true },
  warehouse_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});