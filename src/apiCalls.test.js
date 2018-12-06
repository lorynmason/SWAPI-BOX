import * as API from './apiCalls.js';

describe('API', () => { 
  let mockFilmsData;
  let mockCharacterData;
  let mockhomeworlds;
  let mockspecies;
  let mockVehicleData;
  let url;
  
  describe('fetchScroll', () => {
    beforeEach(() => {
      mockFilmsData = [ 
        { homeworld: 'Earth',
          population: 2345678,
          species: 'human',
          name: 'bob'}, 
        { homeworld: 'Venus',
          population: 3,
          species: 'yet to be determined',
          name: 'we call him alien'} 
        ]
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(
            mockFilmsData)
          })
        )
    })

    it('calls fetch with the correct params', () => {
      //set-up
      url = 'https://swapi.co/api/films';
      const expected = 'https://swapi.co/api/films';
      //execution
      API.fetchScroll(url)
      //expectation
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
      
    it('should return a list of movies if everything is okay', async () => {
      //set-up
      const expected = mockFilmsData
      //execution
      const result = await API.fetchScroll(url)
      //expectation
      expect(result).toEqual(expected)
    })

    it('should throw an error if everything is not okay', async () => {
      //set-up
      const expectedError = Error('Yoda- ERROR has detected, API returned okay NOT')
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          okay: false
        })
      })
      //execution and expectation
      await expect(API.fetchScroll(url)).rejects.toEqual(expectedError)
    })
  })
      //set-up
      //execution
      //expectation

})