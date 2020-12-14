import { render } from '@redwoodjs/testing'

import AuthenticateLink from './AuthenticateLink'

describe('AuthenticateLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthenticateLink />)
    }).not.toThrow()
  })
})
