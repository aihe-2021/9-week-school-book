import { authenticateUser } from '../actions/user'
import { verifyUser } from '../apis/index'

jest.mock('../apis/index')

const fakeUser = {
  name: 'fakeUser',
  picture: 'https://somepicture.url.com',
  email: 'fake.user@email.cool',
  githubUsername: 'fake-user-github-name',
  token: '12345'
}

describe('authenticateUser', () => {
  it('clears the user on failure', () => {
    expect.assertions(1)
    const fakeError = new Error('fake error')
    const dispatch = jest.fn()
    verifyUser.mockReturnValue(Promise.reject(fakeError))

    return authenticateUser(fakeUser)(dispatch)
      .then(() => {
        console.log(dispatch.mock.calls)
        expect(dispatch.mock.calls).toEqual(fakeError)
        return null
      })
  })
})
