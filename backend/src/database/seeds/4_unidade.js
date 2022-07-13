/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('unidade').withSchema('estatistica').del()
  await knex('unidade').withSchema('estatistica').insert([
    {id: 1, instituicao: 1, unidade: 'Comando Geral da Polícia Militar',  sigla: 'QCG'},
    {id: 2, instituicao: 1, unidade: 'Diretoria da Agência Central de Inteligência',  sigla: 'DACI'},
  ]);
};
