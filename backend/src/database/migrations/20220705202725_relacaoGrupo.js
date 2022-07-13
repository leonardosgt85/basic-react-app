/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('relacaoGrupo', t=>{
        t.increments('id');
        t.integer('pai').unsigned();
        t.integer('filho').unsigned();
        

        t.foreign('pai').references('id').inTable('estatistica.grupo').onDelete('no action');
        t.foreign('filho').references('id').inTable('estatistica.grupo').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('relacaoGrupo');
};
