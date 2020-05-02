import { Document } from 'mongoose';

export interface IWarehouse extends Document {
  readonly name: String,
  readonly address: String,
  readonly congestion: Number,
  readonly created_on: Date,
  readonly updated_at: Date
}