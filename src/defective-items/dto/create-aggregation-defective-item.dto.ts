import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationDefectiveItemDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly item_id: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly created_on: Number;

  @ApiProperty({
    type: String,
    example: 1,
  })
  readonly updated_at: Number;
}