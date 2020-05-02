import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IWish, IWishService } from './interfaces';
import { CreateWishDto } from './dto/create-wish.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class WishesService implements IWishService {
  constructor(@InjectModel('Wishes') private readonly wishModel: Model<IWish>) { }

  async findAll(): Promise<IWish[]> {
    return await this.wishModel.find().exec();
  }

  async findOne(options: object): Promise<IWish> {
    return await this.wishModel.findOne(options).exec();
  }

  async findById(ID: string): Promise<IWish> {
    return await this.wishModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createItemDto: CreateWishDto): Promise<IWish> {
    const createdTodo = new this.wishModel(createItemDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateWishDto): Promise<IWish> {
    const item = await this.wishModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.wishModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.wishModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.wishModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
