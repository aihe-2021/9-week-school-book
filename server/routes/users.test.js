import request from 'supertest'
import server from '../server'
import { getUsers } from '../db/users'

jest.mock('../db/users')

describe('GET /api/v1/users', () => {
  it('returns users from db', () => {
    getUsers.mockReturnValue(Promise.resolve([{ id: 1, name: 'test 1' }]))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/users')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual([{ id: 1, name: 'test 1' }])
        return null
      })
      .catch(e => {
        console.log(e)
      })
  })
  it('returns 500 if db error', () => {
    getUsers.mockImplementation(() => Promise.reject(new Error('bad db')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(3)
    return request(server)
      .get('/api/v1/users')
      .then(res => {
        expect(res.status).toEqual(500)
        expect(res.text).toMatch(/error/)
        expect(console.log).toHaveBeenCalledWith('bad db')
        console.log.mockRestore()
        return null
      })
  })
})
