import { IWish } from './wishes.interface';

export interface IWishService {
  findAll(): Promise<IWish[]>;
  findAllAndSort(options: object): Promise<IWish[]>;
  findById(ID: string): Promise<IWish | null>;
  findByOptions(options: object): Promise<IWish[] | null>;
  create(items: IWish): Promise<IWish>;
  update(ID: string, newValue: IWish): Promise<IWish | null>;
  delete(ID: string): Promise<string>;
}
