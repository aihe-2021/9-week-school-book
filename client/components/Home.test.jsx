import '@testing-library/jest-dom'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { fetchUsers } from '../actions'
import Home from './Home'

jest.mock('../actions')
fetchUsers.mockReturnValue({ type: 'SET_USERS' })

describe('<Home />', () => {
  const fakeStore = {
    getState: () => ({ users: [{ id: 1, name: 'text 1' }, { id: 2, name: 'text 2' }] }),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  }
  test.skip('calls fetchUsers on render', () => {
    render(<Provider store={fakeStore}><Router><Home /></Router></Provider>)
    expect(fakeStore.dispatch).toHaveBeenCalledWith({ type: 'SET_USERS' })
  })
  test('displays users from state', () => {
    render(<Provider store={fakeStore}><Router><Home /></Router></Provider>)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
    expect(listItems[0]).toHaveTextContent(/text 1/)
    expect(listItems[1]).toHaveTextContent(/text 2/)
  })
})
