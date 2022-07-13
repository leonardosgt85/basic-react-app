
exports.up = function(knex) {
  return knex.schema.withSchema('estatistica').createTable('usuario', t=>{

    t.increments('id');
    t.varchar('nome',100);
    t.varchar('cpf',22).notNullable();
    t.varchar('telefone',22);
    t.varchar('email', 40);
    t.integer('unidade').unsigned();
    t.integer('grupo').unsigned();
    t.integer('perfil').unsigned();
    t.varchar('password').notNullable();
  })
};


exports.down = function(knex) {
    return knex.schema.withSchema('estatistica').dropTable('relacaoGrupo');
};
