/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('instituicao', t=>{
        t.increments('id');
        t.integer('estado').unsigned();
        t.varchar('instituicao', 30)
        t.varchar('sigla', 10)
        t.foreign('estado').references('id').inTable('estatistica.estado').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('instituicao');

};
