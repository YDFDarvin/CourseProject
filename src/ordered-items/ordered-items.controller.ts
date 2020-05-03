import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { OrderedItemsService } from './ordered-items.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateOrderedItemDto } from './dto/create-ordered-item.dto';

@ApiTags('ordered-items')
@Controller('ordered-items')
export class OrderedItemsController {
  constructor(private readonly orderedItemsService: OrderedItemsService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.orderedItemsService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('find')
  public async findItem(@Response() res, @Body() body: CreateOrderedItemDto) {
    const queryCondition = body;
    const items = await this.orderedItemsService.findByOptions(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.orderedItemsService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createOrderedItemDto: CreateOrderedItemDto) {
    const item = await this.orderedItemsService.create(createOrderedItemDto);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateOrderedItemDto, @Response() res) {
    const item = await this.orderedItemsService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.orderedItemsService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
