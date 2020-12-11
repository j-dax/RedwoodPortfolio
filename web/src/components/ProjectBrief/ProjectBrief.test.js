import { render } from '@redwoodjs/testing'

import ProjectBrief from './ProjectBrief'

describe('ProjectBrief', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectBrief />)
    }).not.toThrow()
  })
})
