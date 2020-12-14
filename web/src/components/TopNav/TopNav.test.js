import { render } from '@redwoodjs/testing'

import TopNav from './TopNav'

describe('TopNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopNav />)
    }).not.toThrow()
  })
})
