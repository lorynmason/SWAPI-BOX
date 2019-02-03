import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import * as API from '../../apiCalls'
import * as Cleaner from '../../cleaner'

describe('App', () => {
  let wrapper
  const mockFunc = jest.fn()
  API.fetchData = mockFunc

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('componentDidMount', () => {
    it('should call getLocalStorage, API.fetchData, Cleaner.cleanFilmsData, addLocalStorage', async() => {
      wrapper.getLocalStorage = mockFunc
      Cleaner.cleanFilmsData = mockFunc
      wrapper.addLocalStorage = mockFunc
      expect(wrapper.getLocalStorage).toHaveBeenCalled()
      expect(API.fetchData).toHaveBeenCalled()
      expect(Cleaner.cleanFilmsData).toHaveBeenCalled()
      expect(wrapper.addLocalStorage).toHaveBeenCalled()

    })
  })

  describe('setCharacterData', () => {
    it('Should call API function', async () => {
      const obj = {results: {}}
      API.fetchData = jest.fn(() => obj)
      API.getMoreCharacterData = jest.fn(() => 'Luke Skywalker')

      await wrapper.instance().setCharacterData()
      expect(API.fetchData).toHaveBeenCalled()
      expect(API.getMoreCharacterData).toHaveBeenCalled()
      const result = wrapper.state('characters')
      expect(result).toEqual('Luke Skywalker')
    })
  })

  describe('setVehicleData', () => {
    it('Should call API function', async () => {
      Cleaner.cleanVehiclesData = jest.fn(() => 'Sand Crawler')

      await wrapper.instance().setVehicleData()
      expect(API.fetchData).toHaveBeenCalled()
      expect(Cleaner.cleanVehiclesData).toHaveBeenCalled()
      const result = wrapper.state('vehicles')
      expect(result).toEqual('Sand Crawler')
    })
  })

  describe('setPlanetData', () => {
    it('should setState of planets to planets', async () => {
      API.fetchData = mockFunc
      API.fetchNestedInfoPlanets = mockFunc
      Cleaner.cleanPlanetData = jest.fn(() => 'Hoth')
      await wrapper.instance().setPlanetData()
      expect(API.fetchData).toHaveBeenCalled()
      expect(API.fetchNestedInfoPlanets).toHaveBeenCalled()
      const result = wrapper.state('planets')
      expect(result).toEqual('Hoth')
    })
  })

  describe('changePage', () => {
    it('should setState of activePage to whatever is passed in', () => {
      const str = 'characters'
      wrapper.instance().changePage(str)
      expect(wrapper.state('activePage')).toEqual('characters')
      wrapper.setState({activePage: 'splash'})
    })
  })

  describe('toggleFavorites', () => {
    it('should find card by the id', async () => {
      const expected = ['Luke Skywalker']
      expect(wrapper.state('favorites')).toEqual([])
      await wrapper.setState({ activePage: 'characters' })
      await wrapper.instance().toggleFavorites('Luke Skywalker')
      expect(wrapper.state('favorites')).toEqual(expected)
    })
  })

  describe('render', () => {
    it('should match the snapshot if activePage = splash', () => {
      wrapper.setState({ activePage: 'splash', splash: [] })
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if activePage !== splash', () => {
      wrapper.setState({ activePage: 'characters' })
      expect(wrapper).toMatchSnapshot()
    })
  })
})
