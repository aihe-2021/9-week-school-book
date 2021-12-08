exports.up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.integer('userId')
    table.integer('comment_by_user') // this is auth id
    table.date('date_posted')
    table.string('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('comments')
}
