import { IContract } from './contract.interface';

export interface IContractService {
  findAll(): Promise<IContract[]>;
  findAllAndSort(options: object): Promise<IContract[]>;
  findById(ID: string): Promise<IContract | null>;
  findByOptions(options: object): Promise<IContract[] | null>;
  create(items: IContract): Promise<IContract>;
  update(ID: string, newValue: IContract): Promise<IContract | null>;
  delete(ID: string): Promise<string>;
}
