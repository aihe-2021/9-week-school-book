exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Comments').del()
    .then(() => {
      // Inserts seed entries
      return knex('Comments').insert([
        {
          id: 1,
          user_id: 1,
          date_posted: new Date(Date.now()),
          comment: 'Great person'
        },
        {
          id: 2,
          user_id: 2,
          date_posted: new Date(Date.now()),
          comment: 'Really Great person'
        },
        {
          id: 3,
          user_id: 3,
          date_posted: new Date(Date.now()),
          comment: 'Extremely great person'
        }
      ])
    })
}
