import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateRefundDto {
  @ApiProperty()
  readonly _id: Types.ObjectId;

  @ApiProperty({
    type: Number,
    example: 69,
  })
  readonly refunded: Number;

  @ApiProperty({
    type: String,
    example: '8fsd89fd9df9898fd98df6fd',
  })
  readonly order_id: String;

  @ApiProperty({
    type: String,
    example: Date.now(),
  })
  readonly created_on: Date;

  @ApiProperty({
    type: String,
    example: Date.now(),
  })
  readonly updated_at: Date;
}