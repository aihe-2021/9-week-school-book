exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          userId: 1,
          date_posted: new Date(Date.now()),
          comment: 'Great person',
          comment_by_user: 'nsVl526ydneLlx2zCLQnlsZGm7R2'
        },
        {
          id: 2,
          userId: 2,
          date_posted: new Date(Date.now()),
          comment: 'Really Great person',
          comment_by_user: 'nsVl526ydneLlx2zCLQnlsZGm7R2'
        },
        {
          id: 3,
          userId: 3,
          date_posted: new Date(Date.now()),
          comment: 'Extremely great person',
          comment_by_user: 'nsVl526ydneLlx2zCLQnlsZGm7R2'
        }
      ])
    })
}
