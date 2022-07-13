/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rota').withSchema('estatistica').del()
  await knex('rota').withSchema('estatistica').insert([

    {id: 1, rota: 'login', obs:'Login do usuário no sistema'},
    
  ]);
};
