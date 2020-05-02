import { Document } from 'mongoose';

export interface IInventory extends Document {
  readonly amount: Number,
  readonly item_id: String,
  readonly warehouse_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}