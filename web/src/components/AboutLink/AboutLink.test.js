import { render } from '@redwoodjs/testing'

import AboutLink from './AboutLink'

describe('AboutLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutLink />)
    }).not.toThrow()
  })
})
