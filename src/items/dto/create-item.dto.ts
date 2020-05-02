import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateItemDto {
  @ApiProperty()
  readonly _id: Types.ObjectId;

  @ApiProperty({
    type: String,
    example: 'wheels',
  })
  readonly name: String;

  @ApiProperty({
    type: Number,
    example: 69,
  })
  readonly price: Number;

  @ApiProperty({
    type: String,
    example: '8fsd89fd9df9898fd98df6fd',
  })
  readonly warehouse_id: String;

  @ApiProperty()
  readonly created_on: Date;

  @ApiProperty()
  readonly updated_at: Date;
}