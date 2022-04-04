import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('user')))
    await knex.schema.createTable('user', (table) => {
      table.increments('id').unsigned().primary();
      table.string('firstName', 50);
      table.string('lastName', 50);
      table.string('email', 50);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('user');
}
