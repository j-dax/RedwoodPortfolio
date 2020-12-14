import { render } from '@redwoodjs/testing'

import ProjectsLink from './ProjectsLink'

describe('ProjectsLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsLink />)
    }).not.toThrow()
  })
})
