import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
    });
}
export async function down(knex:Knex){
    return knex.schema.dropTable('user');
}