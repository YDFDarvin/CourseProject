import { Document } from 'mongoose';

export interface IOrder extends Document {
  readonly user_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}