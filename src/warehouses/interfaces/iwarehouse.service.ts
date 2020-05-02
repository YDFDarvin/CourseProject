import { IWarehouse } from './warehouse.interface';

export interface IWarehouseService {
  findAll(): Promise<IWarehouse[]>;
  findById(ID: string): Promise<IWarehouse | null>;
  findOne(options: object): Promise<IWarehouse | null>;
  create(items: IWarehouse): Promise<IWarehouse>;
  update(ID: string, newValue: IWarehouse): Promise<IWarehouse | null>;
  delete(ID: string): Promise<string>;
}
