import { ApiProperty } from '@nestjs/swagger';

export class CreateAggregationUserDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly name: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly balance: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly password: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly login: Number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  readonly email: Number;

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