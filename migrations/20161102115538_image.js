
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('text', function(table){
    table.increments('id')
    table.string('image')
    table.decimal('lat')
    table.decimal('long')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('text')
};
