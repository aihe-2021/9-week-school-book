exports.up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.string('comment')
    table.string('comment_by_user') // this is auth id
    table.date('date_posted')
    table.increments('id').primary()
    table.integer('userId')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('comments')
}
