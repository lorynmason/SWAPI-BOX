import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper;
  let mockfavorites;
  let mockChangePage;

  beforeEach(()=> {
    mockChangePage =jest.fn()
    mockfavorites = [],
    wrapper = shallow(<Nav favorites={ mockfavorites }
                            changePage={ mockChangePage } />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})


