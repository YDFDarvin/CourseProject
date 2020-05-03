import { IRefund } from './refunds.interface';

export interface IRefundService {
  findAll(): Promise<IRefund[]>;
  findById(ID: string): Promise<IRefund | null>;
  findByOptions(options: object): Promise<IRefund[] | null>;
  create(items: IRefund): Promise<IRefund>;
  update(ID: string, newValue: IRefund): Promise<IRefund | null>;
  delete(ID: string): Promise<string>;
}
