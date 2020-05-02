import { IItem } from './items.interface';

export interface IItemService {
  findAll(): Promise<IItem[]>;
  findById(ID: string): Promise<IItem | null>;
  findOne(options: object): Promise<IItem | null>;
  create(items: IItem): Promise<IItem>;
  update(ID: string, newValue: IItem): Promise<IItem | null>;
  delete(ID: string): Promise<string>;
}
