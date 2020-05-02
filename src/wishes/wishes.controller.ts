import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateWishDto } from './dto/create-wish.dto';
import { WishesService } from './wishes.service';

@ApiTags('wishes')
@Controller('wishes')
export class WishesController {
  constructor(private readonly wishService: WishesService) {}

  @Get()
  public async getItems(@Response() res) {
    const wishes = await this.wishService.findAll();
    return res.status(HttpStatus.OK).json(wishes);
  }

  @Get('find')
  public async findItem(@Response() res, @Body() body) {
    const queryCondition = body;
    const wishes = await this.wishService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(wishes);
  }

  @Get('/:id')
  public async getItem(@Response() res, @Param('id') id: string){
    const wish = await this.wishService.findById(id);
    return res.status(HttpStatus.OK).json(wish);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async createItem(@Response() res, @Body() createTodoDTO: CreateWishDto) {
    const wish = await this.wishService.create(createTodoDTO);
    return res.status(HttpStatus.OK).json(wish);
  }

  @Patch('/:id')
  public async updateTodo(@Param('id') id: string, @Body() body: CreateWishDto, @Response() res) {
    const wish = await this.wishService.update(id, body);
    return res.status(HttpStatus.OK).json(wish);
  }

  @Delete('/:id')
  public async deleteTodo(@Param('id') id: string, @Response() res) {
    const wish = await this.wishService.delete(id);
    return res.status(HttpStatus.OK).json(wish);
  }
}
