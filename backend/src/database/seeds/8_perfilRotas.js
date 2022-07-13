/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('perfilRota').withSchema('estatistica').del()
  await knex('perfilRota').withSchema('estatistica').insert([

    {id: 1, perfil: 1, rota:1, status:1},

  ]);
};
