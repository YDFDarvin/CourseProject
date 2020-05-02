import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRefund, IRefundService } from './interfaces';
import { CreateRefundDto } from './dto/create-refund.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class RefundsService implements IRefundService {
  constructor(@InjectModel('Refunds') private readonly itemModel: Model<IRefund>) { }

  async findAll(): Promise<IRefund[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(options: object): Promise<IRefund> {
    return await this.itemModel.findOne(options).exec();
  }

  async findById(ID: string): Promise<IRefund> {
    return await this.itemModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createRefundDto: CreateRefundDto): Promise<IRefund> {
    const createdTodo = new this.itemModel(createRefundDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateRefundDto): Promise<IRefund> {
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
