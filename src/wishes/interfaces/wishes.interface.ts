import { Document } from 'mongoose';

export interface IWish extends Document {
  readonly quantity: Number,
  readonly item_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}