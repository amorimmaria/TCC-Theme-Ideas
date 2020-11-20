import Knex from "knex"

export async function up(knex: Knex) {
  await knex.schema.createTable("users", table => {
    table.string("__id").unique().primary()
    table.string("name").notNullable()
    table.string("email").notNullable()
    table.string("password").notNullable()
    table.binary("avatar")
    table.string("emailContato")
  })
}

export async function down(knex: Knex) {
  await knex.schema.dropTable("users")
}
