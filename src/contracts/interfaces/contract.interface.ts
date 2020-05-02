import { Document } from 'mongoose';

export interface IContract extends Document {
  readonly header: String,
  readonly description: String,
  readonly created_on: Date,
  readonly updated_at: Date
}