import { UserEntity } from '../../entities/user.entity';
import { provideSingleton } from '../../utils/provideSingleton';
import { UserRepoAbstract } from '../user.repo.abstract';

@provideSingleton(KnexUserRepo)
export class KnexUserRepo implements UserRepoAbstract {
  async getById(id: number): Promise<UserEntity> {
    return {
      id: id,
      firstName: 'Nicolas',
      lastName: 'Perez',
      email: 'nicoperez@test.com',
    };
  }
  async add(data: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    return {
      id: 1,
      ...data,
    };
  }
}
