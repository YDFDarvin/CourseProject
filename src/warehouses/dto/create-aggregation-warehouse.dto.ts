import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationWarehouseDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly name: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly address: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly congestion: Number;

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