import { Document } from 'mongoose';

export interface IItem extends Document {
  readonly name: String,
  readonly price: Number,
  readonly warehouse_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}