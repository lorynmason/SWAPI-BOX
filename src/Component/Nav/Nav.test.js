import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('Nav', () => {
  let wrapper
  let mockfavorites
  let mockChangePage

  beforeEach(() => {
    mockChangePage = jest.fn()
    mockfavorites = []
    wrapper = shallow(<Nav
      favorites={mockfavorites}
      changePage={mockChangePage}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
