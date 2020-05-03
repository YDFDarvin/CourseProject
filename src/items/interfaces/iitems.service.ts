import { IItem } from './items.interface';

export interface IItemService {
  findAll(): Promise<IItem[]>;
  findAllAndSort(options: object): Promise<IItem[]>;
  findById(ID: string): Promise<IItem | null>;
  findByOptions(options: object): Promise<IItem[] | null>;
  create(items: IItem): Promise<IItem>;
  update(ID: string, newValue: IItem): Promise<IItem | null>;
  delete(ID: string): Promise<string>;
}
