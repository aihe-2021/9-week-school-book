import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('Test', () => {
    render(<App />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent(/Test/)
  })
})
