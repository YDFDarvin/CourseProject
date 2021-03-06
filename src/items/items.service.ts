import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IItem, IItemService } from './interfaces';
import { CreateItemDto } from './dto/create-item.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class ItemsService implements IItemService {
  constructor(@InjectModel('Items') private readonly itemModel: Model<IItem>) { }

  async findAll(): Promise<IItem[]> {
    return await this.itemModel.find().exec();
  }

  async findAllAndSort(options: object): Promise<IItem[]> {
    return await this.itemModel.find().sort(options).exec();
  }

  async findByOptions(options: object): Promise<IItem[]> {
    return await this.itemModel.find(options).exec();
  }

  async findById(ID: string): Promise<IItem> {
    return await this.itemModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<IItem> {
    const createdTodo = new this.itemModel(createItemDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateItemDto): Promise<IItem> {
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
