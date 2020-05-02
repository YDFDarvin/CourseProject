import { Document } from 'mongoose';

export interface IWarehouse extends Document {
  readonly name: String,
  readonly address: String,
  readonly congestion: Number,
  readonly inventory_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}