import Knex from "knex"

export async function up(knex: Knex) {
  await knex.schema.createTable("recovery_tokens", table => {
    table.increments()
    table.integer("user_id")
      .notNullable()
      .references("__id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    table.string("token")
  })
}

export async function down(knex: Knex) {
  await knex.schema.dropTable("recovery_tokens")
}
