import { UserEntity } from '../../entities/user.entity';
import { UseCase } from '../use-case.base';
import { inject } from 'inversify';
import { UserRepoAbstract } from '../../repository/user.repo.abstract';
import { TYPES } from '../../types';

type Request = Omit<UserEntity, 'id'>;
type Response = UserEntity;

export class AddUserUseCase implements UseCase<Request, Response> {
  constructor(@inject(TYPES.UserRepo) private userRepo: UserRepoAbstract) {}

  async execute(request: Request): Promise<Response> {
    const user = await this.userRepo.add(request);
    return user;
  }
}
