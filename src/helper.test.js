import { fetchScroll , cleanFilmsData } from './helper.js';

describe('fetchScroll', () => {

  it.skip('calls fetch with the correct params', () => {

  })

  it.skip('calls cleanFilmsData', () => {
    let cleanFilmsData = jest.fn();
    fetchScroll();
    expect(cleanFilmsData).toHaveBeenCalled()
  })


})

describe('cleanFilmsData', () => {

  it('returns an object with the correct properties', () => {
    let mockdata = {results: [
      {title: 'NewHope', opening_crawl: 'A long time ago', release_date: 1978, extra: 'did this get removed'}
      ]}
    let expected = [{title: 'NewHope', text: 'A long time ago', date: 1978}]

    ;
    expect(cleanFilmsData(mockdata)).toEqual(expected);

  })

})