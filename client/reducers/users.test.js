import userReducer from './users'
import { setUsers } from '../actions'

describe('users reducer', () => {
  test('initialState is empty array', () => {
    const state = userReducer(undefined, { type: 'INIT' })
    expect(state).toEqual([
      {
        id: 0,
        authId: '',
        name: '',
        cohort: '',
        email: '',
        location: '',
        quote: '',
        githubLink: '',
        skills: '',
        facebook: '',
        linkedin: '',
        twitter: '',
        instagram: '',
        image: ''
      }
    ])
  })
  test('SET_USERS changes state', () => {
    const state = userReducer([], setUsers([{ id: 1, name: 'test 1' }]))
    expect(state).toEqual([{ id: 1, name: 'test 1' }])
  })
})
