import { UserEntity } from '../../entities/user.entity';
// import { provideSingleton } from '../../utils/provideSingleton';
import { UseCase } from '../use-case.base';
import { inject } from 'inversify';
import { UserRepoAbstract } from '../../repository/user.repo.abstract';
import { TYPES } from '../../types';

interface Request {
  userId: number;
}
type Response = UserEntity;

export class GetUserByIdUseCase implements UseCase<Request, Response> {
  constructor(@inject(TYPES.UserRepo) private userRepo: UserRepoAbstract) {}

  async execute(request: Request): Promise<Response> {
    const user = await this.userRepo.getById(request.userId);
    return user;
  }
}
