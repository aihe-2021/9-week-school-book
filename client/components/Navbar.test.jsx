import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Navbar from './Navbar'

describe('<Navbar />', () => {
  it('Sign Out', () => {
    render(<Navbar />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(4)
    expect(listItems[2]).toHaveTextContent(/Signup | Login/)
    expect(listItems[3]).toHaveTextContent(/Sign Out/)
  })
})
