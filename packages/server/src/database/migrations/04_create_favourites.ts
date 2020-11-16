import Knex from "knex"

export async function up(knex: Knex) {
  await knex.schema.createTable("favourites", table => {
    table.integer("user_id")
      .notNullable()
      .references("__id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    table.integer("favourite_id")
      .notNullable()
      .references("__id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    table.string("token")
  })
}

export async function down(knex: Knex) {
  await knex.schema.dropTable("favourites")
}
