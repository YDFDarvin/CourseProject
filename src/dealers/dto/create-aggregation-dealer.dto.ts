import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationDealerDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly name: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly description: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly item_id: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly contract_id: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly type: Number;

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