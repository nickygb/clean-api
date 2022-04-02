import dotenv from 'dotenv';
import { resolve as pathResolve } from 'path';

const { env } = process;
dotenv.config({ path: pathResolve(__dirname, `./env/.env.${env.NODE_ENV}`) });

export const config = {
  port: 5000,
  AWS: {
    region: env.AWS_REGION,
  },
  AURORA: {
    db: env.AURORA_DB,
    secretArn: env.AURORA_SECRET_ARN,
    resourceArn: env.AURORA_RESOURCE_ARN,
    port: env.AURORA_PORT,
    endpoint: env.AURORA_ENDPOINT,
  },
};
