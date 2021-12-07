// import '@testing-library/jest-dom'
// import React from 'react'
// import { HashRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { render, screen } from '@testing-library/react'
// import { fetchUsers } from '../actions'
// import App from './App'

// jest.mock('../actions')
// fetchUsers.mockReturnValue({ type: 'SET_USERS' })

// describe('<App />', () => {
//   const fakeStore = {
//     getState: () => ({ users: [{ id: 1, name: 'text 1' }, { id: 2, name: 'text 2' }] }),
//     dispatch: jest.fn(),
//     subscribe: jest.fn()
//   }
//   test('calls fetchUsers on render', () => {
//     render(<Provider store={fakeStore}><App /></Provider>)
//     expect(fakeStore.dispatch).toHaveBeenCalledWith({ type: 'SET_USERS' })
//   })
//   test('displays users from state', () => {
//     render(<Provider store={fakeStore}><App /></Provider>)
//     const listItems = screen.getAllByRole('listitem')
//     expect(listItems).toHaveLength(2)
//     expect(listItems[0]).toHaveTextContent(/text 1/)
//     expect(listItems[1]).toHaveTextContent(/text 2/)
//   })
// })

import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('Test', () => {
    render(<App />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent(/Test/)
  })
})
