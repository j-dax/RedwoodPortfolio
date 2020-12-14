import { render } from '@redwoodjs/testing'

import CommonHeader from './CommonHeader'

describe('CommonHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommonHeader />)
    }).not.toThrow()
  })
})
