exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('authId')
    table.string('name')
    table.string('cohort')
    table.string('email')
    table.string('location')
    table.string('quote')
    table.string('githubLink')
    table.string('skills')
    table.string('facebook')
    table.string('linkedin')
    table.string('twitter')
    table.string('instagram')
    table.string('image')
  }
  )
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}