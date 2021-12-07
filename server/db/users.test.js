const knex = require('knex')
// const config = require('./knexfile').test
// const testDb = knex(config)

// const { getUsers, getOne } = require('./users')

// beforeAll(() => testDb.migrate.latest())
// beforeEach(() => testDb.seed.run())

// describe('getUsers', () => {
//   it('reads all users', () => {
//     expect.assertions(1)
//     return getUsers(testDb)
//       .then(users => {
//         expect(users).toHaveLength(22)
//         return null
//       })
//   })
// })

// describe('getOne', () => {
//   it('finds one specific user in database', () => {
//     expect.assertions(1)
//     return getOne(testDb)
//       .then(user => {
//         expect(user).toHaveLength(1)
//         return null
//       })
//   })
// })
