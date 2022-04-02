import { UserEntity } from '../../entities/user.entity';
import { provideSingleton } from '../../utils/provideSingleton';
import { UseCase } from '../use-case.base';
import 'reflect-metadata';
import { inject } from 'inversify';
import { KnexUserRepo } from '../../repository/implementations/knex.user.repo';
import { UserRepoAbstract } from '../../repository/user.repo.abstract';

interface Request {
  userId: number;
}
type Response = UserEntity;

@provideSingleton(GetUserByIdUseCase)
export class GetUserByIdUseCase implements UseCase<Request, Response> {
  constructor(@inject(KnexUserRepo) private userRepo: UserRepoAbstract) {}

  async execute(request: Request): Promise<Response> {
    const user = await this.userRepo.getById(request.userId);
    return user;
  }
}
