import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRetail, IRetailService } from './interfaces';
import { CreateRetailDto } from './dto/create-retail.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class RetailsService implements IRetailService {
  constructor(@InjectModel('Retails') private readonly retailModel: Model<IRetail>) { }

  async findAll(): Promise<IRetail[]> {
    return await this.retailModel.find().exec();
  }

  async findByOptions(options: object): Promise<IRetail[]> {
    return await this.retailModel.find(options).exec();
  }

  async findById(ID: string): Promise<IRetail> {
    return await this.retailModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createRetailDto: CreateRetailDto): Promise<IRetail> {
    const createdTodo = new this.retailModel(createRetailDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateRetailDto): Promise<IRetail> {
    const item = await this.retailModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.retailModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.retailModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.retailModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
