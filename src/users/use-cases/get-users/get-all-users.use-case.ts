import { UserEntity } from '../../entities/user.entity';
// import { provideSingleton } from '../../utils/provideSingleton';
import { UseCase } from '../use-case.base';
import { inject } from 'inversify';
import { UserRepoAbstract } from '../../repository/user.repo.abstract';
import { TYPES } from '../../types';

type Response = UserEntity[];

export class GetAllUsersUseCase implements UseCase<void, Response> {
  constructor(@inject(TYPES.UserRepo) private userRepo: UserRepoAbstract) {}

  async execute(): Promise<Response> {
    const users = await this.userRepo.getAll();
    return users;
  }
}
