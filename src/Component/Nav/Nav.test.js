import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper;
  let mockfavorites;

  beforeEach(()=> {
    mockfavorites = [],
    wrapper = shallow(<Nav favorites={ mockfavorites } />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})


