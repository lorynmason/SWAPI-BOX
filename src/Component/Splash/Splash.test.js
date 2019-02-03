import React from 'react'
import { shallow, mount } from 'enzyme'
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
    }, {
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }, {
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }, {
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }, {
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }, {
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }, {
      title: 'A New Hope',
      text: 'A Long Time Ago...',
      date: '1976'
    }]
    wrapper = mount(<Splash changePage={mockExitSplash} splash={mockfilms} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('logo should call mockExitSplash on click', () => {
    const logoImg = wrapper.find('img')
    logoImg.simulate('click')

    expect(mockExitSplash).toHaveBeenCalled()
  })

  it('Enter button should call mockExitSplash on click', () => {
    const button = wrapper.find('[type="button"]')
    button.simulate('click')

    expect(mockExitSplash).toHaveBeenCalled()
  })

  it('Should render backgound if no film', () => {
    mockfilms = []
    wrapper = shallow(<Splash changePage={mockExitSplash} splash={mockfilms} />)
    expect(wrapper).toMatchSnapshot()
  })
})
