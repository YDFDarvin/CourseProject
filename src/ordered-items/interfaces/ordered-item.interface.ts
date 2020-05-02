import { Document } from 'mongoose';

export interface IOrderedItem extends Document {
  readonly quantity: Number,
  readonly item_id: String,
  readonly order_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}