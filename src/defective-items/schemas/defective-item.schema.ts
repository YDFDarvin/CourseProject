import { Schema } from 'mongoose';

export const DefectiveItemSchema = new Schema({
  item_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});