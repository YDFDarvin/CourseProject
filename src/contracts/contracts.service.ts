import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IContract, IContractService } from './interfaces';
import { CreateContractDto } from './dto/create-contract.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class ContractsService implements IContractService {
  constructor(@InjectModel('Contracts') private readonly contractModel: Model<IContract>) { }

  async findAll(): Promise<IContract[]> {
    return await this.contractModel.find().exec();
  }

  async findAllAndSort(options: object): Promise<IContract[]> {
    return await this.contractModel.find().sort(options).exec();
  }

  async findByOptions(options: object): Promise<IContract[]> {
    return await this.contractModel.find(options).exec();
  }

  async findById(ID: string): Promise<IContract> {
    return await this.contractModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createContractDto: CreateContractDto): Promise<IContract> {
    const createdTodo = new this.contractModel(createContractDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateContractDto): Promise<IContract> {
    const item = await this.contractModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.contractModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.contractModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.contractModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
