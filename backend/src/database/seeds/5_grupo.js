/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('grupo').withSchema('estatistica').del()
  await knex('grupo').withSchema('estatistica').insert([
    {id: 1, unidade: 2, grupo:'Diretoria'},
    {id: 2, unidade: 2, grupo:'Administração'},
  ]);
};
