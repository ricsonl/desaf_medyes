import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('user', table => { // cria a tabela 'user' com campos 'id', 'nome' e 'sobrenome'
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
    });
}
export async function down(knex:Knex){ // desfaz a acao caso necessario
    return knex.schema.dropTable('user');
}