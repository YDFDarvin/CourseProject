import { IOrderedItem } from './ordered-item.interface';

export interface IOrderedItemService {
  findAll(): Promise<IOrderedItem[]>;
  findById(ID: string): Promise<IOrderedItem | null>;
  findOne(options: object): Promise<IOrderedItem | null>;
  create(items: IOrderedItem): Promise<IOrderedItem>;
  update(ID: string, newValue: IOrderedItem): Promise<IOrderedItem | null>;
  delete(ID: string): Promise<string>;
}
