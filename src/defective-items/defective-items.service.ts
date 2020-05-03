import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDefectiveItem, IItemService } from './interfaces/index';
import { CreateDefectiveItemDto } from './dto/create-defective-item.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class DefectiveItemsService implements IItemService {
  constructor(@InjectModel('DefectiveItems') private readonly defectiveItemModel: Model<IDefectiveItem>) { }

  async findAll(): Promise<IDefectiveItem[]> {
    return await this.defectiveItemModel.find().exec();
  }

  async findAllAndSort(options: object): Promise<IDefectiveItem[]> {
    return await this.defectiveItemModel.find().sort(options).exec();
  }

  async findByOptions(options: object): Promise<IDefectiveItem[]> {
    return await this.defectiveItemModel.find(options).exec();
  }

  async findById(ID: string): Promise<IDefectiveItem> {
    return await this.defectiveItemModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createDefectiveItemDto: CreateDefectiveItemDto): Promise<IDefectiveItem> {
    const createdTodo = new this.defectiveItemModel(createDefectiveItemDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateDefectiveItemDto): Promise<IDefectiveItem> {
    const defectiveItem = await this.defectiveItemModel.findById(Types.ObjectId(ID)).exec();

    if (!defectiveItem._id) {
      debug('item not found');
    }

    await this.defectiveItemModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.defectiveItemModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.defectiveItemModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
