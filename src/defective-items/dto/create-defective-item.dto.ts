import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateDefectiveItemDto {
  @ApiProperty()
  readonly _id: Types.ObjectId;

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