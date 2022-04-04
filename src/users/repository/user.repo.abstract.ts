import { UserEntity } from '../entities/user.entity';

export abstract class UserRepoAbstract {
  abstract getById(id: number): Promise<UserEntity>;
  abstract getAll(): Promise<UserEntity[]>;
  abstract add(user: Omit<UserEntity, 'id'>): Promise<UserEntity>;
}
