import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<App />)
  })
  // add other mocks!

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('ComponentDidMount should update state with films array', () => {


  })

  describe('componentDidMount', () => {
    it.skip('calls cleanFilmsData', () => {
      let cleanFilmsData = jest.fn();
      componentDidMount();
      expect(cleanFilmsData).toHaveBeenCalled()
    })

    it.skip('calls sets state with a film', () => {
      let filmsData = jest.fn();
      let cleanFilmsData = jest.fn();
      let expectedState
      componentDidMount();
      expect().toHaveBeenCalled()
    })
  })


})


