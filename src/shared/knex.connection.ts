const knexDataApiClient = require('knex-aurora-data-api-client');
import knex, { Knex } from 'knex';

import { config } from '../config/config';
import { injectable } from 'inversify';

type KnexAuroraConfig = Knex.Config & {
  connection: {
    secretArn: string;
    resourceArn: string;
    options: { endpoint?: string; region: string };
  };
};

@injectable()
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
        sslEnabled: config.AURORA.sslEnabled,
        options: { endpoint: config.AURORA.endpoint, region: config.AWS.region },
      },
    } as KnexAuroraConfig);
  }

  public get client() {
    return this._client;
  }
}
