import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IWarehouse, IWarehouseService } from './interfaces';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class WarehousesService implements IWarehouseService {
  constructor(@InjectModel('Warehouses') private readonly warehouseModel: Model<IWarehouse>) { }

  async findAll(): Promise<IWarehouse[]> {
    return await this.warehouseModel.find().exec();
  }

  async findOne(options: object): Promise<IWarehouse> {
    return await this.warehouseModel.findOne(options).exec();
  }

  async findById(ID: string): Promise<IWarehouse> {
    return await this.warehouseModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createWarehouseDto: CreateWarehouseDto): Promise<IWarehouse> {
    const createdTodo = new this.warehouseModel(createWarehouseDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateWarehouseDto): Promise<IWarehouse> {
    const item = await this.warehouseModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.warehouseModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.warehouseModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.warehouseModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
