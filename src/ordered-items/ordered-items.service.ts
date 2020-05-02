import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IOrderedItem, IOrderedItemService } from './interfaces';
import { CreateOrderedItemDto } from './dto/create-ordered-item.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class OrderedItemsService implements IOrderedItemService {
  constructor(@InjectModel('OrderedItems') private readonly itemModel: Model<IOrderedItem>) { }

  async findAll(): Promise<IOrderedItem[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(options: object): Promise<IOrderedItem> {
    return await this.itemModel.findOne(options).exec();
  }

  async findById(ID: string): Promise<IOrderedItem> {
    return await this.itemModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createOrderedItemDto: CreateOrderedItemDto): Promise<IOrderedItem> {
    const createdTodo = new this.itemModel(createOrderedItemDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateOrderedItemDto): Promise<IOrderedItem> {
    const item = await this.itemModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.itemModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.itemModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.itemModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
