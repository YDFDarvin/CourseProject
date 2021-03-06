import { IDefectiveItem } from './defective-items.interface';

export interface IItemService {
  findAll(): Promise<IDefectiveItem[]>;
  findAllAndSort(options: object): Promise<IDefectiveItem[]>;
  findById(ID: string): Promise<IDefectiveItem | null>;
  findByOptions(options: object): Promise<IDefectiveItem[] | null>;
  create(items: IDefectiveItem): Promise<IDefectiveItem>;
  update(ID: string, newValue: IDefectiveItem): Promise<IDefectiveItem | null>;
  delete(ID: string): Promise<string>;
}