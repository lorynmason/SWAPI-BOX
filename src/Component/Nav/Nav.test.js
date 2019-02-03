import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('Card', () => {
  let wrapper
  let mockFavorites = [{
    id: 'R2-D2'
  }]
  const mockFunc = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Nav favorites={mockFavorites} changePage={mockFunc}/>)
  })

  it('should match snapshot',() => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call changePage when clicked',() => {
    wrapper.find('#characters-link').simulate('click');
    wrapper.find('#planets-link').simulate('click');
    wrapper.find('#vehicles-link').simulate('click');
    wrapper.find('#favorites-link').simulate('click');
    expect(mockFunc).toHaveBeenCalledTimes(4)
  })
})