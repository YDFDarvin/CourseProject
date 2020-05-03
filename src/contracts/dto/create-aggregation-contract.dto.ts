import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationContractDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly header: Number;

  @ApiProperty({
    type: Number,
    example: -1,
  })
  readonly description: Number;

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