import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import { shallow } from 'enzyme';

describe('Splash', () => {

  let wrapper;
  let mockExitSplash;
  let mockfilm;

  beforeEach(()=> {
    mockExitSplash = jest.fn()
    mockfilm = { title: 'A New Hope',
          text: 'A Long Time Ago...',
          date: '1976'}
    wrapper = shallow(<Splash exitSplash={ mockExitSplash }
                            film={ mockfilm } />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})
