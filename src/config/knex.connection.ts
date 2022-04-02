import { provideSingleton } from '../utils/provideSingleton';
const knexDataApiClient = require('knex-aurora-data-api-client');
import knex, { Knex } from 'knex';

import { config } from './config';

@provideSingleton(KnexConnection)
export class KnexConnection {
  private _client: Knex;
  constructor() {
    this._client = knex({
      client: knexDataApiClient.mysql,
      connection: {
        secretArn: config.AURORA.secretArn,
        resourceArn: config.AURORA.resourceArn,
        port: config.AURORA.port,
        database: config.AURORA.db,
        options: { endpoint: config.AURORA.endpoint, region: config.AWS.region },
      },
    } as any);
  }

  public get client() {
    return this._client;
  }
}
