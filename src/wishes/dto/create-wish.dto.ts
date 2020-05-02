import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateWishDto {
  @ApiProperty()
  readonly _id: Types.ObjectId;

  @ApiProperty({
    type: Number,
    example: 69,
  })
  readonly quantity: Number;

  @ApiProperty({
    type: String,
    example: '8fsd89fd9df9898fd98df6fd',
  })
  readonly item_id: String;

  @ApiProperty()
  readonly created_on: Date;

  @ApiProperty()
  readonly updated_at: Date;
}