import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateInventoryDto } from './dto/create-inventory.dto';

@ApiTags('inventories')
@Controller('inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.inventoriesService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('find')
  public async findItem(@Response() res, @Body() body: CreateInventoryDto) {
    const queryCondition = body;
    const items = await this.inventoriesService.findByOptions(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.inventoriesService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createItemDTO: CreateInventoryDto) {
    const item = await this.inventoriesService.create(createItemDTO);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateInventoryDto, @Response() res) {
    const item = await this.inventoriesService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.inventoriesService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
