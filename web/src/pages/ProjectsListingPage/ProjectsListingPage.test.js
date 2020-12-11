import { render } from '@redwoodjs/testing'

import ProjectsListingPage from './ProjectsListingPage'

describe('ProjectsListingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsListingPage />)
    }).not.toThrow()
  })
})
