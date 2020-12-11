import { render } from '@redwoodjs/testing'

import ProjectView from './ProjectView'

describe('ProjectView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectView />)
    }).not.toThrow()
  })
})
