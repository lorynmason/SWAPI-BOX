import * as API from './apiCalls.js';

describe('API', () => { 
  let mockFilmsData;
  let mockCharacterData;
  let mockhomeworlds;
  let mockspecies;
  let mockVehicleData;
  let url;
  let mockCharacterDataStart;
  let mockCharacterDataEnd;
  let characterData;
  
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
      mockCharacterData = {results: [ 
        { homeworld: 'https://swapi.co/api/planets/1/',
          population: 'https://swapi.co/api/planets/1/',
          species: 'https://swapi.co/api/species/1/',
          name: 'bob'}, 
        { homeworld: 'https://swapi.co/api/planets/1/',
          population: 'https://swapi.co/api/planets/1/',
          species: 'https://swapi.co/api/species/1/',
          name: 'we call him alien'} 
        ]}
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(
            mockCharacterData)
          })
        )
    })

    it('calls fetch with the correct params', () => {
      url = 'https://swapi.co/api/people';
      const expected = 'https://swapi.co/api/people'
      API.fetchCharacters(url)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a list of Characters, if response is okay', async() => {
      const expected = mockCharacterData
      const result = await API.fetchCharacters(url)
      expect(result).toEqual(expected)
    })

    it('should return an error message if response was not okay', async() => {
      const expectedError = Error('Chewbacca- AGERUYEHSFG: translation, Error, API returned not okay')
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          okay: false
        })
      })
      await expect(API.fetchCharacters(url)).rejects.toEqual(expectedError)
    })

  })
    
  describe('fetchCharactersHomeWorld', () => {
    beforeEach(() => {
      mockCharacterData = {results: [ 
        { homeworld: 'https://swapi.co/api/planets/1/',
          population: 'https://swapi.co/api/planets/1/',
          species: 'https://swapi.co/api/species/1/',
          name: 'bob'}, 
        { homeworld: 'https://swapi.co/api/planets/1/',
          population: 'https://swapi.co/api/planets/1/',
          species: 'https://swapi.co/api/species/1/',
          name: 'we call him alien'} 
        ]}
      mockCharacterDataEnd = [ 
        { homeworld: 'Earth',
          population: '123456789',
          species: 'https://swapi.co/api/species/1/',
          name: 'bob'}, 
        { homeworld: 'Venus',
          population: '32',
          species: 'https://swapi.co/api/species/1/',
          name: 'we call him alien'} 
        ]
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCharacterData)
        })
      )
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true, 
        json: () => Promise.resolve(
          mockCharacterDataEnd)
        })
      )
    })
    it('calls fetch with the correct params', () => {
      const expected = 'https://swapi.co/api/planets/1/'
      API.fetchCharactersHomeWorld(mockCharacterData)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it.skip('should return a list of Characters that now have homeworld and population endpoints, if the response is okay', async() => {
      const expected = mockCharacterDataEnd
      const result = await API.fetchCharactersHomeWorld(mockCharacterData)
      expect(result).toEqual(expected)
    })

    it('should return an error message if response was not okay', async() => {
      const expectedError = Error('Chewbacca- 2AGERUYEHSFG: translation, Error, API2 returned not okay')
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          okay: false
        })
      })
      await expect(API.fetchCharactersHomeWorld(mockCharacterData)).rejects.toEqual(expectedError)
    })
  })
})