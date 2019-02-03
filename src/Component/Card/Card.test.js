import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  let wrapper
  const mockCard = {
    id: 'R2-D2',
    Homeworld: 'Naboo',
    Population: 4500000000,
    Species: 'Droi'
  }
  let mockFavorites = [{
    id: 'R2-D2'
  }]
  const mockFunc = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Card card={mockCard} favorites={mockFavorites} toggleFavorites={mockFunc}/>)
  })

  it('should match snapshot if it is a favorite',() => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if it is not a favorite',() => {
    mockFavorites = [{
      id: 'C-3PO'
    }]
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleFavorites when clicked',() => {
    wrapper.find('button').simulate('click');
    expect(mockFunc).toHaveBeenCalled()
  })
})