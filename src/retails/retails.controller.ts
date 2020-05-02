import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { RetailsService } from './retails.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateRetailDto } from './dto/create-retail.dto';

@ApiTags('retails')
@Controller('retails')
export class RetailsController {
  constructor(private readonly retailsService: RetailsService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.retailsService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('find')
  public async findItem(@Response() res, @Body() body) {
    const queryCondition = body;
    const items = await this.retailsService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.retailsService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createTodoDTO: CreateRetailDto) {
    const item = await this.retailsService.create(createTodoDTO);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateRetailDto, @Response() res) {
    const item = await this.retailsService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.retailsService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}

