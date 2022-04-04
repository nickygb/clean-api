import { UserEntity } from '../entities/user.entity';
import { Route, Controller, Get, Tags, Post, Body } from 'tsoa';
import { inject } from 'inversify';
import { GetUserByIdUseCase } from '../use-cases/get-user-by-id/get-user-by-id.use-case';
import { AddUserUseCase } from '../use-cases/add-user/add-user.use-case';
import { TYPES } from '../types';
import { GetAllUsersUseCase } from '../use-cases/get-users/get-all-users.use-case';

@Tags('users')
@Route('users')
export class UserController extends Controller {
  constructor(
    @inject(TYPES.GetUserByIdUseCase) private getUserById: GetUserByIdUseCase,
    @inject(TYPES.GetAllUsersUseCase) private getAllUsers: GetAllUsersUseCase,
    @inject(TYPES.AddUserUseCase) private addUser: AddUserUseCase
  ) {
    super();
  }

  @Get('{id}')
  public async getById(id: number): Promise<UserEntity> {
    return this.getUserById.execute({ userId: id });
  }

  @Get()
  public async getAll(): Promise<UserEntity[]> {
    return this.getAllUsers.execute();
  }

  @Post()
  public async add(@Body() user: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    return this.addUser.execute(user);
  }
}
