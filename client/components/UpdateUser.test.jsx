import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UpdateUser from './UpdateUser'

describe('<UpdateUser />', () => {
  it('check for btn', () => {
    render(<UpdateUser />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/Click to Edit/)
  })
})