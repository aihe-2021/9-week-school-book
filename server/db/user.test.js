const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)
const { checkUserIdExists, checkUserNameExists, addUser, updateUserId, getUserData } = require('./user')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('checkUserIdExists', () => {
  test('count 1 if the user exists', () => {
    expect.assertions(1)
    const userId = 'nsVl526ydneLlx2zCLQnlsZGm7R2'
    return checkUserIdExists(userId, testDb)
      .then(count => {
        expect(count[0].n).toEqual(1)
      })
  })
})

describe('checkUserNameExists', () => {
  test('count 1 if the user exists', () => {
    expect.assertions(1)
    const name = 'Callum Morris'
    return checkUserNameExists(name, testDb)
      .then(count => {
        expect(count[0].n).toEqual(1)
      })
  })
  test('return 0 where the user name does not exist', () => {
    expect.assertions(1)
    const name = 'Jane Doe'
    return checkUserNameExists(name, testDb)
      .then(count => {
        expect(count[0].n).toEqual(0)
      })
  })
})

describe('addUser', () => {
  test('adds a user', () => {
    expect.assertions(1)
    const user = { name: 'Jane Doe', authId: '2134', image: 'fakeImage.url', email: 'jane@user.com' }

    return addUser(user, testDb)
      .then(id => {
        expect(id[0]).toEqual(23)
      })
  })
})

describe('updateUserId', () => {
  test('update user information', () => {
    expect.assertions(4)
    const user = {
      name: 'Callum Morris',
      authId: 'nsVl526ydneLlx2zCLQnlsZGm7R2',
      email: 'callum.test@user.com',
      image: 'imageofcallum.url'
    }
    return updateUserId(user, testDb)
      .then(outcome => {
        expect(outcome).toBe(1)
        return getUserData(user, testDb)
      })
      .then(userInfo => {
        expect(userInfo).not.toBeNull()
        expect(userInfo[0].name).toBe('Callum Morris')
        expect(userInfo[0].email).toBe('callum.test@user.com')
      })
  })
})
