import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('@ Enspiral Dev Academy Alumni 2021', () => {
    render(<Footer />)
    const footer = screen.getByRole('footer')
    expect(footer).toHaveTextContent(/@ Enspiral Dev Academy Alumni 2021/)
  })
})