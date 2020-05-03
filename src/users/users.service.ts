import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, IUserService } from './interfaces';
import { CreateUserDto } from './dto/create-user.dto';
import { debug } from 'console';
import { Types } from "mongoose";

@Injectable()
export class UsersService implements IUserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>) { }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findAllAndSort(options: object): Promise<IUser[]> {
    return await this.userModel.find().sort(options).exec();
  }

  async findByOptions(options: object): Promise<IUser[]> {
    return await this.userModel.find(options).exec();
  }

  async findById(ID: string): Promise<IUser> {
    return await this.userModel.findById(Types.ObjectId(ID)).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdTodo = new this.userModel(createUserDto);
    return await createdTodo.save();
  }

  async update(ID: string, newValue: CreateUserDto): Promise<IUser> {
    const item = await this.userModel.findById(Types.ObjectId(ID)).exec();

    if (!item._id) {
      debug('item not found');
    }

    await this.userModel.findByIdAndUpdate(Types.ObjectId(ID), newValue).exec();
    return await this.userModel.findById(Types.ObjectId(ID)).exec();
  }

  async delete(ID: string): Promise<string> {
    try {
      await this.userModel.findByIdAndRemove(Types.ObjectId(ID)).exec();
      return 'The item has been deleted';
    } catch (err) {
      debug(err);
      return 'The item could not be deleted';
    }
  }
}
