/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuario').withSchema('estatistica').del()
  await knex('usuario').withSchema('estatistica').insert([
    {id: 1, nome: 'Administrador', cpf: '11111111111', telefone: '65111111111', email: 'contrainteligenciadaci@pm.mt.gov.br', unidade: 2, grupo: 1, perfil: 1, password: 'e10adc3949ba59abbe56e057f20f883e'},
     
  ]);
};