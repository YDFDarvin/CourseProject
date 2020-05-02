import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IOrder, IOrderService } from './interfaces';
import { CreateOrderDto } from './dto/create-order.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class OrdersService implements IOrderService {
  constructor(@InjectModel('Orders') private readonly itemModel: Model<IOrder>) { }

  async findAll(): Promise<IOrder[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(options: object): Promise<IOrder> {
    return await this.itemModel.findOne(options).exec();
  }

  async findById(ID: string): Promise<IOrder> {
    return await this.itemModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createOrderDto: CreateOrderDto): Promise<IOrder> {
    const createdTodo = new this.itemModel(createOrderDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateOrderDto): Promise<IOrder> {
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
