import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { CreateAggregationWarehouseDto } from './dto/create-aggregation-warehouse.dto';

@ApiTags('warehouses')
@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehouseService: WarehousesService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.warehouseService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('sort')
  public async getSortedItems(@Response() res, @Body() body: CreateAggregationWarehouseDto) {
    const queryCondition = body;
    const items = await this.warehouseService.findAllAndSort(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('find')
  public async findItem(@Response() res, @Body() body: CreateWarehouseDto) {
    const queryCondition = body;
    const items = await this.warehouseService.findByOptions(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.warehouseService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createWarehouseDTO: CreateWarehouseDto) {
    const item = await this.warehouseService.create(createWarehouseDTO);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateWarehouseDto, @Response() res) {
    const item = await this.warehouseService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.warehouseService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
