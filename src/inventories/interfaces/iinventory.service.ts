import { IInventory } from './inverntory.interface';

export interface IInventoryService {
  findAll(): Promise<IInventory[]>;
  findAllAndSort(options: object): Promise<IInventory[]>;
  findById(ID: string): Promise<IInventory | null>;
  findByOptions(options: object): Promise<IInventory[] | null>;
  create(items: IInventory): Promise<IInventory>;
  update(ID: string, newValue: IInventory): Promise<IInventory | null>;
  delete(ID: string): Promise<string>;
}
