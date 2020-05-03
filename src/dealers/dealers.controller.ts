import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { DealersService } from './dealers.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { CreateAggregationDealerDto } from './dto/create-aggregation-dealer.dto';

@ApiTags('dealers')
@Controller('dealers')
export class DealersController {
  constructor(private readonly dealersService: DealersService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.dealersService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('sort')
  public async getSortedItems(@Response() res, @Body() body: CreateAggregationDealerDto) {
    const queryCondition = body;
    const items = await this.dealersService.findAllAndSort(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Post('find')
  public async findItem(@Response() res, @Body() body: CreateDealerDto) {
    const queryCondition = body;
    const items = await this.dealersService.findByOptions(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.dealersService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createDealerDTO: CreateDealerDto) {
    const item = await this.dealersService.create(createDealerDTO);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateDealerDto, @Response() res) {
    const item = await this.dealersService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.dealersService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}
