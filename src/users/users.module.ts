import { ContainerModule, decorate, injectable } from 'inversify';
import { UserController } from './controller/user.controller';
import { KnexUserRepo } from './repository/implementations/knex.user.repo';
import { UserRepoAbstract } from './repository/user.repo.abstract';
import { TYPES } from './types';
import { AddUserUseCase } from './use-cases/add-user/add-user.use-case';
import { GetUserByIdUseCase } from './use-cases/get-user-by-id/get-user-by-id.use-case';
import { GetAllUsersUseCase } from './use-cases/get-users/get-all-users.use-case';

decorate(injectable(), UserController);
decorate(injectable(), KnexUserRepo);
decorate(injectable(), AddUserUseCase);
decorate(injectable(), GetUserByIdUseCase);
decorate(injectable(), GetAllUsersUseCase);

export const users = new ContainerModule((bind) => {
  // Controllers
  bind(UserController).toSelf();
  // Repositories
  bind<UserRepoAbstract>(TYPES.UserRepo).to(KnexUserRepo).inSingletonScope();
  // Use Cases
  bind<AddUserUseCase>(TYPES.AddUserUseCase).to(AddUserUseCase);
  bind<GetUserByIdUseCase>(TYPES.GetUserByIdUseCase).to(GetUserByIdUseCase);
  bind<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase).to(GetAllUsersUseCase);
});
