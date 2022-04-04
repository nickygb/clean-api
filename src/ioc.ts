import { Container, decorate, injectable } from 'inversify';
import { shared } from './shared/shared.module';
import { users } from './users/users.module';
import { Controller } from 'tsoa';

const iocContainer = new Container();

decorate(injectable(), Controller); // Makes tsoa's Controller injectable

iocContainer.load(shared);
iocContainer.load(users);

export { iocContainer };
