import { IDefectiveItem } from './defective-items.interface';

export interface IItemService {
  findAll(): Promise<IDefectiveItem[]>;
  findById(ID: string): Promise<IDefectiveItem | null>;
  findOne(options: object): Promise<IDefectiveItem | null>;
  create(items: IDefectiveItem): Promise<IDefectiveItem>;
  update(ID: string, newValue: IDefectiveItem): Promise<IDefectiveItem | null>;
  delete(ID: string): Promise<string>;
}