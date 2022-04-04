import { inject } from 'inversify';
import { KnexConnection } from '../../../shared/knex.connection';
import { UserEntity } from '../../entities/user.entity';
import { UserRepoAbstract } from '../user.repo.abstract';
import { TYPES } from '../../../shared/shared.module';

export class KnexUserRepo implements UserRepoAbstract {
  constructor(@inject(TYPES.KnexConnection) private connection: KnexConnection) {}
  async getById(id: number): Promise<UserEntity> {
    const client = this.connection.client;
    const user = await client('user').select().where({ id }).first();
    return user;
  }

  async getAll(): Promise<UserEntity[]> {
    const client = this.connection.client;
    const users = await client('user').select();
    return users;
  }

  async add(data: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    const client = this.connection.client;
    const [id] = await client('user').insert({
      ...data,
    });
    const user = await this.getById(id);
    return user;
  }
}
