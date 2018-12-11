import React from 'react'
import { shallow } from 'enzyme'
import Planets from './Planets';

describe('Plantes', () => {
  const toggleFavorites = jest.fn()
  let wrapper;
  let mockPlanetData = [
    {
      info: {
      Climate: "Climate:  temperate",
      Name: "Alderaan",
      Population: "Population: 2000000000",
      Residents: "Residents:  Leia Organa,Bail Prestor Organa,Raymus Antilles",
      Terrain: "Terrain:  grasslands, mountains",
      }
    }
  ]
  beforeEach(() => {
    wrapper = shallow(<Planets planets={mockPlanetData} toggleFavorites={toggleFavorites}/>)
  })

  it( 'should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('favorite button should call toggleFavorites on click', () => {
    const button = wrapper.find('button')
    button.simulate('click')

    expect(toggleFavorites).toHaveBeenCalled()
  })
})