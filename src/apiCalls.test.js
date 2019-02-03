import * as API from './apiCalls'

describe('API', () => {
  let url
  const mockPlanetData = {
    results: [
      {
        name: 'Alderaan',
        population: 2000000000,
        residents: [
          'https://swapi.co/api/people/5/',
          'https://swapi.co/api/people/68/',
          'https://swapi.co/api/people/81/'
        ],
        terrain: 'grasslands, mountains'
      },
      {
        name: 'Saturn',
        population: 200,
        residents: [
          'https://swapi.co/api/people/5/',
          'https://swapi.co/api/people/68/',
          'https://swapi.co/api/people/81/'
        ],
        terrain: 'grasslands, mountains'
      }
    ]
  }
  const mockCharacterData = [
      {
        homeworld: 'https://swapi.co/api/planets/1/',
        population: 'https://swapi.co/api/planets/1/',
        species: 'https://swapi.co/api/species/1/',
        name: 'bob'
      },
      {
        homeworld: 'https://swapi.co/api/planets/1/',
        population: 'https://swapi.co/api/planets/1/',
        species: 'https://swapi.co/api/species/1/',
        name: 'we call him alien'
      }
    ]   
  const mockFilmsData = [
        {
          title: 'A New Hope',
          text: 'A Long Time Ago...',
          date: '1976',
          somethingToRemove: 'we do not want this when cleaned, but good for fetching'
        },
        {
          title: 'The Empire',
          text: 'A Long Time Ago... but not so long as the last one',
          date: '1979',
          somethingToRemove: 'we do not want this when cleaned, but good for fetching'
        }
      ]
      
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockFilmsData)
          }))
  describe('fetchData', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilmsData)
    }))
    it('calls fetch with the correct params', () => {
      url = 'https://swapi.co/api/films'
      const expected = 'https://swapi.co/api/films'
      API.fetchData(url)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should throw an error if everything is not okay', async () => {
      const expectedError = Error('Chewbacca- AGERUYEHSFG: translation, Error, API returned not okay')
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          okay: false
        })
      })
      await expect(API.fetchData(url)).rejects.toEqual(expectedError)
    })
  })

  describe('getMoreCharacterData', () => {
    it('calls fetch with the correct params', () => {
      const expected = 'https://swapi.co/api/planets/1/'
      API.getMoreCharacterData(mockCharacterData)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return an error message if response was not okay', async () => {
      const expectedError = Error('Chewbacca- AGERUYEHSFG: translation, Error, API returned not okay')
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          okay: false
        })
      })
      await expect(API.getMoreCharacterData(mockCharacterData)).rejects.toEqual(expectedError)
    })
  })

  describe('fetchNestedInfoPlanets', () => {
      const mockNestedReturnArrayOfObjects = [
        {
          name: 'Alderaan',
          population: 2000000000,
          residents: ['robert', 'susan', 'joel'],
          terrain: 'grasslands, mountains'
        },
        {
          name: 'Saturn',
          population: 200,
          residents: ['bob', 'sally', 'joe'],
          terrain: 'grasslands, mountains'
        }
      ]
      const mockNestedReturnResidentsArray = {
        residents: ['robert', 'susan', 'joel']
      }

      it('should return a list of planetInfo, if the response is okay', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNestedReturnArrayOfObjects)
        }))
        const expected = mockNestedReturnArrayOfObjects.map(planets => Object.keys(planets))
        const mockFetchCall = await API.fetchNestedInfoPlanets(mockPlanetData)
        const result = mockFetchCall.map(call => Object.keys(call))
        expect(result).toEqual(expected)
      })
  })
})
