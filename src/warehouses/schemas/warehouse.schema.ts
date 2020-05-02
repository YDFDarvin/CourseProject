import { Schema } from 'mongoose';

export const WarehouseSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  congestion: { type: Number, required: true },
  inventory_id: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});