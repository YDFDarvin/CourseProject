import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationInventoryDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly amount: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly item_id: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly warehouse_id: Number;

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