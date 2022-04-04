import { ContainerModule } from 'inversify';
import { KnexConnection } from './knex.connection';

export const TYPES = {
  KnexConnection: Symbol.for('KnexConnection'),
};

export const shared = new ContainerModule((bind) => {
  bind<KnexConnection>(TYPES.KnexConnection).to(KnexConnection);
});
