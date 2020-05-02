import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { DefectiveItemsService } from './defective-items.service';
import { CreateDefectiveItemDto } from './dto/create-defective-item.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('defective-items')
@Controller('defective-items')
export class DefectiveItemsController {
  constructor(private readonly defectiveItemsService: DefectiveItemsService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.defectiveItemsService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('find')
  public async findItem(@Response() res, @Body() body) {
    const queryCondition = body;
    const items = await this.defectiveItemsService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.defectiveItemsService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createDefectiveItemDto: CreateDefectiveItemDto) {
    const item = await this.defectiveItemsService.create(createDefectiveItemDto);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateDefectiveItemDto, @Response() res) {
    const item = await this.defectiveItemsService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.defectiveItemsService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
