import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { RefundsService } from './refunds.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateRefundDto } from './dto/create-refund.dto';

@ApiTags('refunds')
@Controller('refunds')
export class RefundsController {
  constructor(private readonly refundsService: RefundsService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.refundsService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('find')
  public async findItem(@Response() res, @Body() body) {
    const queryCondition = body;
    const items = await this.refundsService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.refundsService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createRefundDto: CreateRefundDto) {
    const item = await this.refundsService.create(createRefundDto);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateRefundDto, @Response() res) {
    const item = await this.refundsService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.refundsService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
