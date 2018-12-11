import React from 'react'
import Favorites from './Favorites'
import { shallow } from 'enzyme'

describe('Favorites', () => {
  let wrapper
  let mockToggleFavorites
  let mockFavorites

  beforeEach(() => {
    mockFavorites = [
        {
          id: 'bob',
          category: 'characters',
          info: {Homeworld: 'Homeworld:  Earth',
            Population: 'Population:  123456789',
            Species: 'Species:  human',
            Name: 'Name:  bob'}
        }
      ]
    mockToggleFavorites = jest.fn(mockFavorites.id)
    wrapper = shallow(<Favorites favorites={mockFavorites} toggleFavorites={mockToggleFavorites} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleFavorites with the correct params', () =>{
    wrapper.find(".favorite-btn").simulate('click')
    expect(mockToggleFavorites).toHaveBeenCalledWith(mockFavorites[0].id)
  })

})
