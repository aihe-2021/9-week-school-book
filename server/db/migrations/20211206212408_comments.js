exports.up = (knex) => {
  return knex.schema.createTable('Comments', (table) => {
    table.increments().primary()
    table.integer('user_id')
    table.integer('comment_by_user') // this is auth id
    table.date('date_posted')
    table.string('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Comments')
}
