import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateContractDto {
  @ApiProperty()
  readonly _id: Types.ObjectId;

  @ApiProperty({
    type: String,
    example: 'Slavery Agreement',
  })
  readonly header: String;

  @ApiProperty({
    type: String,
    example: 'now r u mine',
  })
  readonly description: String;

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