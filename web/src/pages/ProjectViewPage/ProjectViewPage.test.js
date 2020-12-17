import { render } from '@redwoodjs/testing'

import ProjectViewPage from './ProjectViewPage'

describe('ProjectViewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectViewPage />)
    }).not.toThrow()
  })
})
