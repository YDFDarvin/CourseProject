import { Document } from 'mongoose';

export interface IDefectiveItem extends Document {
  readonly item_id: String,
  readonly created_on: Date,
  readonly updated_at: Date
}