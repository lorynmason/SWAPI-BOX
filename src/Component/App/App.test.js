import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import * as API from '../../apiCalls'
import * as Cleaner from '../../cleaner'

describe('App', () => {
  let wrapper
  let films

  beforeEach(() => {
    wrapper = shallow(<App />)
    films = jest.fn()
  })

  describe('componentDidMount', () => {
    it.skip('ComponentDidMount should update state with films array', async() => {
      await wrapper.instance()
      console.log(wrapper.state())
      expect(wrapper.state('splash')).toHaveLength(7)
    })

    it.skip('calls cleanFilmsData', () => {
      films = jest.fn()
      wrapper.instance().componentDidMount()
      expect(films).toHaveBeenCalled()
    })
  })

  describe('setCharacterData', () => {
    it.only('Should call API function', async () => {
      API.fetchCharacters = jest.fn()
      API.fetchCharactersHomeWorld = jest.fn()
      API.fetchCharactersSpecies = jest.fn()
      Cleaner.cleanCharacterData = jest.fn(() => 'Luke Skywalker')
      wrapper.setState = jest.fn()

      await wrapper.instance().setCharacterData()
      expect(API.fetchCharacters).toHaveBeenCalled()
      expect(API.fetchCharactersHomeWorld).toHaveBeenCalled()
      expect(API.fetchCharactersSpecies).toHaveBeenCalled()
      expect(Cleaner.cleanCharacterData).toHaveBeenCalled()
      expect(wrapper.setState).toHaveBeenCalledWith({ characters: 'Luke Skywalker' })
    })
  })

  describe('setVehicleData', () => {
    it('Should call API function', async () => {
      API.fetchVehicles = jest.fn()
      Cleaner.cleanVehiclesData = jest.fn(() => 'Sand Crawler')
      wrapper.setState = jest.fn()

      await wrapper.instance().setVehicleData()
      expect(API.fetchVehicles).toHaveBeenCalled()
      expect(Cleaner.cleanVehiclesData).toHaveBeenCalled()
      expect(wrapper.setState).toHaveBeenCalledWith({ vehicles: 'Sand Crawler' })
    })
  })

  describe('setPlanetData', () => {
    it('should setState of planets to planets', async () => {
      API.fetchPlanets = jest.fn()
      API.fetchNestedInfoPlanets = jest.fn()
      Cleaner.cleanPlanetData = jest.fn(() => 'Hoth')
      wrapper.setState = jest.fn()

      await wrapper.instance().setPlanetData()
      expect(API.fetchPlanets).toHaveBeenCalled()
      expect(API.fetchNestedInfoPlanets).toHaveBeenCalled()
      expect(wrapper.setState).toHaveBeenCalledWith({ planets: 'Hoth' })
    })
  })

  describe('setFavorites', () => {
    beforeEach(async () => {
      wrapper = shallow(<App />)
      await wrapper.setState({ favorites: [{ name: 'pizza', id: 'pizza' }] })
    })

    it('it should setState of favorites if its not included already in favorites', () => {
      wrapper.instance().setFavorites({ name: 'bacon', id: 'bacon' }, 'bacon')
      expect(wrapper.state('favorites')).toEqual([{ name: 'pizza', id: 'pizza' }, { name: 'bacon', id: 'bacon' }])
    })

    it.skip('it should setState of favorites if its not included already in favorites', () => {
      wrapper.instance().setFavorites({ name: 'pizza', id: 'pizza' }, 'pizza')
      expect(wrapper.state('favorites')).toEqual([])
    })
  })

  describe('changePage', () => {
    it('should setState of activePage to whatever is passed in', () => {
      const str = 'home'
      wrapper.instance().changePage(str)
      expect(wrapper.state('activePage')).toEqual('home')
    })
  })

  describe('toggleFavorites', () => {
    it.skip('should find card by the id', async () => {
      const expected = [
        {
          category: 'characters',
          id: 'Luke Skywalker',
          info:
        {
          Homeworld: 'Homeworld:  Tatooine',
          Name: 'Luke Skywalker',
          Population: 'Population:  200000',
          Species: 'Species:  Human'
        }
        }
      ]
      wrapper = mount(<App />)
      expect(wrapper.state('favorites')).toEqual([])
      await wrapper.setState({ activePage: 'characters' })
      await wrapper.instance().toggleFavorites('Luke Skywalker')
      expect(wrapper.state('favorites')).toEqual(expected)
    })
  })

  describe('render', () => {
    it('should match the snapshot if activePage = splash', () => {
      wrapper = shallow(<App />)
      wrapper.setState({ activePage: 'splash' })
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if activePage !== splash', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
