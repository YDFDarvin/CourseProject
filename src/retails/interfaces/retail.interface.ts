import { Document } from 'mongoose';

export interface IRetail extends Document {
  readonly discount: Number,
  readonly threshold_quantity: Number,
  readonly item_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}