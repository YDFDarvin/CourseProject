import { IInventory } from './inverntory.interface';

export interface IInventoryService {
  findAll(): Promise<IInventory[]>;
  findById(ID: string): Promise<IInventory | null>;
  findOne(options: object): Promise<IInventory | null>;
  create(items: IInventory): Promise<IInventory>;
  update(ID: string, newValue: IInventory): Promise<IInventory | null>;
  delete(ID: string): Promise<string>;
}
