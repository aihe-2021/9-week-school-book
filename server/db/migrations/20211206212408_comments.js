exports.up = (knex) => {
  return knex.schema.createTable('Comments', (table) => {
    table.increments().primary()
    table.integer('user_id').references('user.id')
    table.date('date_posted')
    table.string('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Comments')
}
