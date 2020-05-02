import { Schema } from 'mongoose';

export const OrderedItemSchema = new Schema({
  quantity: { type: Number, required: true },
  order_id: { type: String, required: true },
  item_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});