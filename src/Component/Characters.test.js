import React from 'react'
import Characters from './Characters'
import { shallow } from 'enzyme'

describe('Characters', () => {
  let wrapper
  let mockCharacters
  let mockActivePage
  let mockToggleFavorites
  let mockFavorites
  let mockCardId

  beforeEach(() => {
    mockFavorites = []
    mockCharacters = [
        {
          id: 'bob',
          category: 'characters',
          info: {Homeworld: 'Homeworld:  Earth',
            Population: 'Population:  123456789',
            Species: 'Species:  human',
            Name: 'Name:  bob'}
        }
      ]
    mockActivePage = 'mockCharacters'
    mockToggleFavorites = jest.fn(mockCharacters.id)
    wrapper = shallow(<Characters characters={mockCharacters} toggleFavorites={mockToggleFavorites} activePage={mockActivePage} favorites={mockFavorites}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleFavorites with the correct params', () =>{
    wrapper.find(".favorite-btn").simulate('click')
    expect(mockToggleFavorites).toHaveBeenCalledWith(mockCharacters[0].id)
  })

})