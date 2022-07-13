/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('perfilRota', t=>{
        t.increments('id');
        t.integer('perfil').unsigned();
        t.integer('rota').unsigned();
        t.boolean('status');

        t.foreign('perfil').references('id').inTable('estatistica.perfil').onDelete('no action');
        t.foreign('rota').references('id').inTable('estatistica.rota').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('perfilRota');
};
