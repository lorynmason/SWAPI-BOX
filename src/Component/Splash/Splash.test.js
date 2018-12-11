import React from 'react'
import { shallow } from 'enzyme'
import Splash from './Splash'

describe('Splash', () => {
  let wrapper
  let mockExitSplash
  let mockfilms

  beforeEach(() => {
    mockExitSplash = jest.fn()
    mockfilms = [{
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }]
    wrapper = shallow(<Splash exitSplash={mockExitSplash} films={mockfilms} />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('logo should call mockExitSplash on click', () => {
    const logoImg = wrapper.find('img')
    logoImg.simulate('click')

    expect(mockExitSplash).toHaveBeenCalled()
  })

  it('Enter button should call mockExitSplash on click', () => {
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockExitSplash).toHaveBeenCalled()
  })
})
