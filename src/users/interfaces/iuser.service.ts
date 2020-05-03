import { IUser } from './users.interfaces';

export interface IUserService {
  findAll(): Promise<IUser[]>;
  findById(ID: string): Promise<IUser | null>;
  findByOptions(options: object): Promise<IUser[] | null>;
  create(items: IUser): Promise<IUser>;
  update(ID: string, newValue: IUser): Promise<IUser | null>;
  delete(ID: string): Promise<string>;
}
