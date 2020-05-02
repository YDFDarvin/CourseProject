import { Document } from 'mongoose';

export interface IRefund extends Document {
  readonly refunded: Number,
  readonly order_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}