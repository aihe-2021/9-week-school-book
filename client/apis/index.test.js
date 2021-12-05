import nock from 'nock'
import { getUsers } from './'

describe('getUsers', () => {
  it('returns data from /api/v1/users', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users')
      .reply(200, [{ id: 1, name: 'test 1' }])

    expect.assertions(1)
    return getUsers()
      .then(actual => {
        scope.done()
        expect(actual).toEqual([{ id: 1, name: 'test 1' }])
        return null
      })
  })
})
