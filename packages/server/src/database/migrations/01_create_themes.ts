import Knex from "knex"

export async function up(knex: Knex) {
    await knex.schema.createTable("themes", table => {
        table.increments()
        table.string('tipoDeUsuario').notNullable();
        table.string('curso').notNullable();
        table.string('sugestaoDeTema').notNullable();
        table.string('descricao').notNullable();
        table.string('area').notNullable();
        table.string('linksArtigos').notNullable();
        
        table.string("__user_id")
            .notNullable()
            .references("__id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
}

export async function down(knex: Knex) {
    await knex.schema.dropTable("themes")
}