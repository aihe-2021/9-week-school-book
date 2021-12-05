import { fetchUsers } from './'
import { getUsers } from '../apis'

jest.mock('../apis')
getUsers.mockReturnValue(Promise.resolve([{ id: 23, name: 'testing' }]))

describe('fetchUsers', () => {
  it('passes users from api to dispatch', () => {
    const dispatch = jest.fn()
    expect.assertions(2)
    return fetchUsers()(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toEqual('SET_USERS')
        expect(dispatch.mock.calls[0][0].users[0]).toEqual({ id: 23, name: 'testing' })
        return null
      })
  })
})
