import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationItemDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly name: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly price: Number;

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