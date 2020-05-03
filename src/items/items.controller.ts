import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { CreateAggregationItemDto } from './dto/create-aggregation-item.dto';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.itemsService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('sort')
  public async getSortedItems(@Response() res, @Body() body: CreateAggregationItemDto) {
    const queryCondition = body;
    const items = await this.itemsService.findAllAndSort(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('find')
  public async findItem(@Response() res, @Body() body: CreateItemDto) {
    const queryCondition = body;
    const items = await this.itemsService.findByOptions(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.itemsService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createItemDTO: CreateItemDto) {
    const item = await this.itemsService.create(createItemDTO);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateItemDto, @Response() res) {
    const item = await this.itemsService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.itemsService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
