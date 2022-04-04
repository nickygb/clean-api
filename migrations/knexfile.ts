// Update with your config settings.
const knexFile = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: 'secret',
    port: '3307',
    multipleStatements: true,
  },
  acquireConnectionTimeout: 10000,
  pool: {
    min: 1,
    max: 1,
  },
  migrations: {
    directory: './knex_scripts',
    tableName: 'knex_migrations',
  },
};

export default knexFile;
