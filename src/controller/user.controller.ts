import { UserEntity } from '../entities/user.entity';
import { Route, Controller, Get, Tags } from 'tsoa';

@Tags('users')
@Route('users')
export class UserController extends Controller {
  constructor() {
    super();
  }

  @Get('{id}')
  public async getById(id: number): Promise<UserEntity> {
    return {
      id: id,
      firstName: 'Nicolas',
      lastName: 'Perez',
      email: 'nicoperez@test.com',
    };
  }
}
