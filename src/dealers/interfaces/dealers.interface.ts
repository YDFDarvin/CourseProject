import { Document } from 'mongoose';

export interface IDealer extends Document {
  readonly name: String,
  readonly description: String,
  readonly item_id: String,
  readonly type: String,
  readonly created_on: Date,
  readonly updated_at: Date
}