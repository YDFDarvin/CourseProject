import { IRetail } from './retail.interface';

export interface IRetailService {
  findAll(): Promise<IRetail[]>;
  findAllAndSort(options: object): Promise<IRetail[]>;
  findById(ID: string): Promise<IRetail | null>;
  findByOptions(options: object): Promise<IRetail[] | null>;
  create(items: IRetail): Promise<IRetail>;
  update(ID: string, newValue: IRetail): Promise<IRetail | null>;
  delete(ID: string): Promise<string>;
}
