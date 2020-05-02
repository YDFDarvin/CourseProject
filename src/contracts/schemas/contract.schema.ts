import { Schema } from 'mongoose';

export const ContractSchema = new Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
  created_on: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});