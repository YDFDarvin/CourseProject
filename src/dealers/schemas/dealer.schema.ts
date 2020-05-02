import { Schema } from 'mongoose';

export const DealerSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  item_id: { type: String, required: true },
  contract_id: { type: String, required: true },
  type: { type: String },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});