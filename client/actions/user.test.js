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
    // verifyUser.mockReturnValue(Promise.resolve({ statusType: 2 }))

    return authenticateUser(fakeUser)(dispatch)
      .then(() => {

        console.log(dispatch.mock.calls)
        // expect(dispatch.mock.calls[0][0].type).toEqual('SHOW_ERROR')
        // expect(dispatch.mock.calls[1][0].type).toEqual('CLEAR_USER')
        expect(dispatch.mock.calls).toEqual(fakeError)
        // return null
      })
  })
 })
//  describe('verifyUserHandler', () => {
//     it('calls SET_CURRENT_USER on success', () => {
//       const dispatch = jest.fn()
//       verifyUser.mockReturnValue(Promise.resolve({ statusType: 2 }))
  
//       return verifyUserHandler(fakeUser)(dispatch).then(() => {
//         expect(verifyUser).toHaveBeenCalledWith(fakeUser)
//         expect(dispatch.mock.calls[0][0].type).toEqual('SET_CURRENT_USER')
//         expect(dispatch.mock.calls[0][0].user).toEqual(fakeUser)
//         return null
//       })
//     })
//  it('clears the user and sets error on failure', () => {
//     const fakeError = new Error('fake error')
//     const dispatch = jest.fn()
//     verifyUser.mockReturnValue(Promise.reject(fakeError))

//     return verifyUserHandler(fakeUser)(dispatch)
//       .then(() => {
//         expect(dispatch.mock.calls[0][0].type).toEqual('SHOW_ERROR')
//         expect(dispatch.mock.calls[1][0].type).toEqual('CLEAR_CURRENT_USER')
//         expect(dispatch.mock.calls[0][0].errorMessage).toEqual(fakeError)
//         return null
//       })
//   })
// })


// https://github.com/aihe-2021/jobs-diary/blob/dev/client/actions/__tests__/users.test.js