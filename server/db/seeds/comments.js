exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => {
      // Inserts seed entries
      return knex('comments').insert([
        {
          comment: 'Great person',
          comment_by_user: 'nsVl526ydneLlx2zCLQnlsZGm7R2',
          date_posted: new Date(Date.now()),
          id: 1,
          userId: 1
        }
      ])
    })
}
