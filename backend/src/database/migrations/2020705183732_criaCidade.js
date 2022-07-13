/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('cidade', t=>{
        t.increments('id');
        t.varchar('cidade', 50);
        t.integer('estado').unsigned();

        t.foreign('estado').references('id').inTable('estatistica.estado').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('cidade');

};
