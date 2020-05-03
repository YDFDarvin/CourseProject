import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IInventory, IInventoryService } from './interfaces';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class InventoriesService implements IInventoryService {
  constructor(@InjectModel('Inventories') private readonly itemModel: Model<IInventory>) { }

  async findAll(): Promise<IInventory[]> {
    return await this.itemModel.find().exec();
  }

  async findAllAndSort(options: object): Promise<IInventory[]> {
    return await this.itemModel.find().sort(options).exec();
  }

  async findByOptions(options: object): Promise<IInventory[]> {
    return await this.itemModel.find(options).exec();
  }

  async findById(ID: string): Promise<IInventory> {
    return await this.itemModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createInventoryDto: CreateInventoryDto): Promise<IInventory> {
    const createdTodo = new this.itemModel(createInventoryDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateInventoryDto): Promise<IInventory> {
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
