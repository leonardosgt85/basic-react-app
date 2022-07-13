/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuario').withSchema('estatistica').del()
  await knex('usuario').withSchema('estatistica').insert([
    {id: 1, nome: 'Administrador'},
    {id: 2, cpf: '11111111111'},
    {id: 3, telefone: '65111111111'},
    {id: 3, email: 'contrainteligenciadaci@pm.mt.gov.br'},
    {id: 3, unidade: 2},
    {id: 3, grupo: 1},
    {id: 3, perfil: 1},
    {id: 3, password: 'e10adc3949ba59abbe56e057f20f883e'}
  
  ]);
};