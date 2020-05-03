import { IOrder } from './order.interface';

export interface IOrderService {
  findAll(): Promise<IOrder[]>;
  findAllAndSort(options: object): Promise<IOrder[]>;
  findById(ID: string): Promise<IOrder | null>;
  findByOptions(options: object): Promise<IOrder[] | null>;
  create(items: IOrder): Promise<IOrder>;
  update(ID: string, newValue: IOrder): Promise<IOrder | null>;
  delete(ID: string): Promise<string>;
}
