import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateContractDto } from './dto/create-contract.dto';

@ApiTags('contracts')
@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Get()
  public async getItems(@Response() res) {
    const items = await this.contractsService.findAll();
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('find')
  public async findItem(@Response() res, @Body() body) {
    const queryCondition = body;
    const items = await this.contractsService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(items);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const item = await this.contractsService.findById(id);
    return res.status(HttpStatus.OK).json(item);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createContractDto: CreateContractDto) {
    const item = await this.contractsService.create(createContractDto);
    return res.status(HttpStatus.OK).json(item);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateContractDto, @Response() res) {
    const item = await this.contractsService.update(id, body);
    return res.status(HttpStatus.OK).json(item);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const item = await this.contractsService.delete(id);
    return res.status(HttpStatus.OK).json(item);
  }
}