/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('grupo', t=>{
        t.increments('id');
        t.integer('unidade').unsigned();
        t.varchar('grupo', 15)
        
        t.foreign('unidade').references('id').inTable('estatistica.unidade').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('grupo');

};
