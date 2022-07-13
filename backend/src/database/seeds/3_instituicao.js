/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('instituicao').withSchema('estatistica').del()
  await knex('instituicao').withSchema('estatistica').insert([
    {id: 1, estado: 13, instituicao: 'Polícia Militar', sigla: 'PMMT'},
  ]);
};
