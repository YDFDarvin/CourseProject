import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationWishDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly quantity: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly item_id: String;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly created_on: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly updated_at: Number;
}