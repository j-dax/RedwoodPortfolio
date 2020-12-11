import { render } from '@redwoodjs/testing'

import ProjectsListingView from './ProjectsListingView'

describe('ProjectsListingView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsListingView />)
    }).not.toThrow()
  })
})
