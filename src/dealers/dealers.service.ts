import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDealer, IDealerService } from './interfaces';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class DealersService implements IDealerService {
  constructor(@InjectModel('Dealers') private readonly dealerModel: Model<IDealer>) { }

  async findAll(): Promise<IDealer[]> {
    return await this.dealerModel.find().exec();
  }

  async findByOptions(options: object): Promise<IDealer[]> {
    return await this.dealerModel.find(options).exec();
  }

  async findById(ID: string): Promise<IDealer> {
    return await this.dealerModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createDealerDto: CreateDealerDto): Promise<IDealer> {
    const createdTodo = new this.dealerModel(createDealerDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateDealerDto): Promise<IDealer> {
    const item = await this.dealerModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.dealerModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.dealerModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.dealerModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
