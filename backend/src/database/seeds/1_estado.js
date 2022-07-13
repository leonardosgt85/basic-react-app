
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estado').withSchema('estatistica').del()
    .then(function () {
      // Inserts seed entries
      return knex('estado').withSchema('estatistica').insert([
        {id:1,estado:'Acre',sigla:'AC'},
        {id:2,estado:'Alagoas',sigla:'AL'},
        {id:3,estado:'Amazonas',sigla:'AM'},
        {id:4,estado:'Amapá',sigla:'AP'},
        {id:5,estado:'Bahia',sigla:'BA'},
        {id:6,estado:'Ceará',sigla:'CE'},
        {id:7,estado:'Distrito Federal',sigla:'DF'},
        {id:8,estado:'Espírito Santo',sigla:'ES'},
        {id:9,estado:'Goiás',sigla:'GO'},
        {id:10,estado:'Maranhão',sigla:'MA'},
        {id:11,estado:'Minas Gerais',sigla:'MG'},
        {id:12,estado:'Mato Grosso do Sul',sigla:'MS'},
        {id:13,estado:'Mato Grosso',sigla:'MT'},
        {id:14,estado:'Pará',sigla:'PA'},
        {id:15,estado:'Paraíba',sigla:'PB'},
        {id:16,estado:'Pernambuco',sigla:'PE'},
        {id:17,estado:'Piauí',sigla:'PI'},
        {id:18,estado:'Paraná',sigla:'PR'},
        {id:19,estado:'Rio de Janeiro',sigla:'RJ'},
        {id:20,estado:'Rio Grande do Norte',sigla:'RN'},
        {id:21,estado:'Rondônia',sigla:'RO'},
        {id:22,estado:'Roraima',sigla:'RR'},
        {id:23,estado:'Rio Grande do Sul',sigla:'RS'},
        {id:24,estado:'Santa Catarina',sigla:'SC'},
        {id:25,estado:'Sergipe',sigla:'SE'},
        {id:26,estado:'São Paulo',sigla:'SP'},
        {id:27,estado:'Tocantins',sigla:'TO'},  
      ]);
    });
};
