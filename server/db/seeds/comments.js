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
        // {
        //   id: 2,
        //   userId: 2,
        //   comment_by_user: 'nsVl526ydneLlx2zCLQnlsZGm7R2',
        //   date_posted: new Date(Date.now()),
        //   comment: 'Really Great person'
        // },
        // {
        //   id: 3,
        //   userId: 3,
        //   comment_by_user: 'nsVl526ydneLlx2zCLQnlsZGm7R2',
        //   date_posted: new Date(Date.now()),
        //   comment: 'Extremely great person'
        // }
      ])
    })
}
