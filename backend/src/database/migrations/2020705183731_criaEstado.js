/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.withSchema('estatistica').createTable('estado', t=>{
    t.increments('id');
    t.varchar('estado', 30);
    t.varchar('sigla', 5);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.withSchema('estatistica').dropTable('estado');
};
