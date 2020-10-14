import Knex from 'knex';

export async function up(knex:Knex) {
  return knex.schema.createTable('themes', table =>{
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('curso').notNullable();
    table.string('sugestaoDeTema').notNullable();
    table.string('descricao').notNullable();
    table.string('area').notNullable();
    table.string('linksDeArtigos').notNullable();
    table.string('tipoDeUsuario').notNullable();


    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

  });
  
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('themes');
  
}