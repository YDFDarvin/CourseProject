import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationRetailDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly discount: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly threshold_quantity: Number;

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