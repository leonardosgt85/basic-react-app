/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('perfil').withSchema('estatistica').del()
  await knex('perfil').withSchema('estatistica').insert([
    
    {id: 1, unidade: '2', perfil:'Administrador'},
    
  ]);
};
