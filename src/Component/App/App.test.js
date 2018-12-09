import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  // add other mocks!

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('ComponentDidMount should update state with films array', () => {
  })

  describe('componentDidMount', () => {
    it.skip('calls cleanFilmsData', () => {
      const cleanFilmsData = jest.fn()
      componentDidMount()
      expect(cleanFilmsData).toHaveBeenCalled()
    })

    it.skip('calls sets state with a film', () => {
      // const filmsData = jest.fn()
      // const cleanFilmsData = jest.fn()
      // const expectedState
      // componentDidMount()
      // expect().toHaveBeenCalled()
    })
  })
})
