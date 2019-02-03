import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'

describe('CardContainer', () => {
  let wrapper
  let mockLocation = {
    location: {
      pathname: '/characters'
    }
  }
  const mockInfo = [{
    id: 'R2-D2',
    Homeworld: 'Naboo',
    Population: 4500000000,
    Species: 'Droi'
  }] 
  let mockAppState = {
    characters: mockInfo,
    favorites: mockInfo,
    planets: mockInfo,
    vehicles: mockInfo
  }

  it('should match snapshot if path is /characters',() => {
    wrapper = shallow(<CardContainer location={mockLocation} appState={mockAppState}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if path is /planets',() => {
    mockLocation = {
      location: {
        pathname: '/planets'
      }
    }
    wrapper = shallow(<CardContainer location={mockLocation} appState={mockAppState}/>)
 
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if path is /vehicles',() => {
    mockLocation = {
      location: {
        pathname: '/vehicles'
      }
    }
    wrapper = shallow(<CardContainer location={mockLocation} appState={mockAppState}/>)
 
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if path is /favorites',() => {
    mockLocation = {
      location: {
        pathname: '/favorites'
      }
    }
    wrapper = shallow(<CardContainer location={mockLocation} appState={mockAppState}/>)
 
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if path is /favorites and favorite.length = 0',() => {
    mockLocation = {
      location: {
        pathname: '/favorites'
      }
    }
    let mockAppState2 = {
      favorites: []
    }
    wrapper = shallow(<CardContainer location={mockLocation} appState={mockAppState2}/>)
 
    expect(wrapper).toMatchSnapshot()
  })
})