import { IDealer } from './dealers.interface';

export interface IDealerService {
  findAll(): Promise<IDealer[]>;
  findById(ID: string): Promise<IDealer | null>;
  findOne(options: object): Promise<IDealer | null>;
  create(items: IDealer): Promise<IDealer>;
  update(ID: string, newValue: IDealer): Promise<IDealer | null>;
  delete(ID: string): Promise<string>;
}
