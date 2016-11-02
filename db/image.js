var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  getImage: getImage
}

function getImage() {
  return knex('text')
}
