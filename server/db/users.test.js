const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const { getUsers } = require('./users')

describe('getUsers', () => {
  beforeAll(() => testDb.migrate.latest())
  beforeEach(() => testDb.seed.run())
  it('reads all users', () => {
    expect.assertions(1)
    return getUsers(testDb)
      .then(users => {
        expect(users).toHaveLength(22)
        return null
      })
  })
})
