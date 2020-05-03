import { IDealer } from './dealers.interface';

export interface IDealerService {
  findAll(): Promise<IDealer[]>;
  findAllAndSort(options: object): Promise<IDealer[]>;
  findById(ID: string): Promise<IDealer | null>;
  findByOptions(options: object): Promise<IDealer[] | null>;
  create(items: IDealer): Promise<IDealer>;
  update(ID: string, newValue: IDealer): Promise<IDealer | null>;
  delete(ID: string): Promise<string>;
}
