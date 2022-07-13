/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('unidade', t=>{
        t.increments('id');
        t.integer('instituicao').unsigned();
        t.varchar('unidade', 80);
        t.varchar('sigla', 10);

        t.foreign('instituicao').references('id').inTable('estatistica.instituicao').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('unidade');
};
