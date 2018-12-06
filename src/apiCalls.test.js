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
        { title: 'A New Hope',
          text: 'A Long Time Ago...',
          date: '1976',
          somethingToRemove: 'we do not want this when cleaned, but good for fetching'}, 
       { title: 'The Empire',
          text: 'A Long Time Ago... but not so long as the last one',
          date: '1979',
          somethingToRemove: 'we do not want this when cleaned, but good for fetching'},  
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

  describe('fetchCharacters', () => {
    beforeEach(() => {
      mockCharacterData = [ 
        { homeworld: 'https://swapi.co/api/planets/1/',
          population: 2345678,
          species: 'https://swapi.co/api/species/1/',
          name: 'bob'}, 
        { homeworld: 'https://swapi.co/api/planets/1/',
          population: 3,
          species: 'https://swapi.co/api/species/1/',
          name: 'we call him alien'} 
        ]
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(
            mockCharacterData)
          })
        )
    })

    it('calls fetch with the correct params', () => {
       //set-up
      url = 'https://swapi.co/api/people';
      const expected = 'https://swapi.co/api/people'
      //execution
      API.fetchCharacters(url)
      //expectation
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a list of Characters, if response is okay', async() => {
      //set-up
      const expected = mockCharacterData
      //execution
      const result = await API.fetchCharacters(url)
      //expection
      expect(result).toEqual(expected)
    })

  })
      //set-up
      //execution
      //expectation

})