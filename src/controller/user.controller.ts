import { UserEntity } from '../entities/user.entity';
import { Route, Controller, Get, Tags, Post, Body } from 'tsoa';
import { provideSingleton } from '../utils/provideSingleton';
import { inject } from 'inversify';
import { GetUserByIdUseCase } from '../use-cases/get-user-by-id/get-user-by-id.use-case';
import { AddUserUseCase } from '../use-cases/add-user/add-user.use-case';

@provideSingleton(UserController)
@Tags('users')
@Route('users')
export class UserController extends Controller {
  constructor(
    @inject(GetUserByIdUseCase) private getUserById: GetUserByIdUseCase,
    @inject(AddUserUseCase) private addUser: AddUserUseCase
  ) {
    super();
  }

  @Get('{id}')
  public async getById(id: number): Promise<UserEntity> {
    return this.getUserById.execute({ userId: id });
  }

  @Post()
  public async add(@Body() user: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    return this.addUser.execute(user);
  }
}
