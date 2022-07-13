/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('estatistica').createTable('perfil', t=>{
        t.increments('id');
        t.integer('unidade').unsigned();
        t.varchar('perfil', 15)
        
        t.foreign('unidade').references('id').inTable('estatistica.unidade').onDelete('no action');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('perfil');

};
