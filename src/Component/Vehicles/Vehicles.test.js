import React from 'react'
import { shallow } from 'enzyme'
import Vehicles from './Vehicles';

describe('Vehicles', () => {
  const toggleFavorites = jest.fn()
  let wrapper;
  let mockVehicleData = [
    {
      info: {
        Class:"Vehicle:  wheeled",
        Model:"Model:  Digger Crawler",
        Name:"Sand Crawler",
        Passengers:"Passengers:  30"
      }
    }
  ]
  beforeEach(() => {
    wrapper = shallow(<Vehicles vehicles={mockVehicleData} toggleFavorites={toggleFavorites}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('favorite button should call toggleFavorites on click', () => {
    const button = wrapper.find('button')
    button.simulate('click')

    expect(toggleFavorites).toHaveBeenCalled()
  })
})