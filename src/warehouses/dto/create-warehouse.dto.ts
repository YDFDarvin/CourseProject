import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateWarehouseDto {
  @ApiProperty()
  readonly _id: Types.ObjectId;

  @ApiProperty({
    type: String,
    example: 'Residence of the President Vladimir Putin',
  })
  readonly name: String;

  @ApiProperty({
    type: String,
    example: 'Kremlin, Moscow',
  })
  readonly address: String;

  @ApiProperty({
    type: Number,
    example: 69,
  })
  readonly congestion: Number;

  @ApiProperty({
    type: String,
    example: '8fsd89fd9df9898fd98df6fd',
  })
  readonly inventory_id: String;

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