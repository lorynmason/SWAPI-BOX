import * as Cleaner from './cleaner'


describe('cleaner', () => {
  let mockFilmsData
  let mockCharacterData
  let mockVehicleData
  let mockPlanetData

  describe('cleanFilmsData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockFilmsData = {results: [
          {title: 'NewHope',
            opening_crawl: 'A long time ago',
            release_date: 1978,
            extra: 'did this get removed'
          }]
        }
      const expected = [
        {title: 'NewHope',
          text: 'A long time ago',
          date: 1978}]

      expect(Cleaner.cleanFilmsData(mockFilmsData)).toEqual(expected)
    })
  })

  describe('cleanCharacterData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockCharacterData = [
        {
          homeworld: 'Earth',
          population: '123456789',
          species: 'human',
          name: 'bob'
        },
        {
          homeworld: 'Venus',
          population: '32',
          species: 'K-9',
          name: 'we call him alien'
        }
      ]
      const expected = [
        {
          id: 'bob',
          category: 'characters',
          info: {Homeworld: 'Homeworld:  Earth',
            Population: 'Population:  123456789',
            Species: 'Species:  human',
            Name: 'bob'}
        },
        {
          id: 'we call him alien',
          category: 'characters',
          info: {Homeworld: 'Homeworld:  Venus',
            Population: 'Population:  32',
            Species: 'Species:  K-9',
            Name: 'we call him alien'}
        }
      ]

      expect(Cleaner.cleanCharacterData(mockCharacterData)).toEqual(expected)
    })
  })

  describe('cleansVehiclesData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockVehicleData = {results: [
        {
          name: 'Ford',
          model: 'Explorer',
          vehicle_class: 'wheeled',
          passengers: 3,
          somethingToRemove: 'take this out in cleaner'
        },
        {
          name: 'Chevy',
          model: 'Tahoe',
          vehicle_class: 'wheeled',
          passengers: 3,
          somethingToRemove: 'take this out in cleaner'
        }]}
      const expected = [
        {
          id: 'Ford',
          category: 'vehicles',
          info: {Name: 'Ford',
                    Model: 'Model:  Explorer',
                    Class: 'Class:  wheeled',
                    Passengers: 'Passengers:  3'}
        },
        {
          id: 'Chevy',
          category: 'vehicles',
          info: {Name: 'Chevy',
                    Model: 'Model:  Tahoe',
                    Class: 'Class:  wheeled',
                    Passengers: 'Passengers:  3'}
        }]
      expect(Cleaner.cleanVehiclesData(mockVehicleData)).toEqual(expected)
    })
  })

  describe('cleanPlanetData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockPlanetData = 
      [{
      name: 'Earth',
      terrain: 'Rocky',
      population: 34,
      climate: 'hot',
      residents: ['bob', 'sally', 'yoda'],
      somethingToRemove: 'blah blah'
      }, 
      {name: 'Pluto',
      terrain: 'water',
      population: 1,
      climate: 'cold',
      residents: [],
      somethingToRemove: 'blah blah'
      }]

      const expected = [
      {id: 'Earth',
      category: 'planets',
      info: {Name: 'Earth',
            Terrain: 'Terrain:  Rocky',
            Population: 'Population:  34',
            Climate: 'Climate:  hot',
            Residents: 'Residents:  bob,sally,yoda'}
      },
      {
      id: 'Pluto',
      category: 'planets',
      info: {Name: 'Pluto',
            Terrain: 'Terrain:  water',
            Population: 'Population:  1',
            Climate: 'Climate:  cold',
            Residents: 'Residents:  No known occupants'}
    }]
      expect(Cleaner.cleanPlanetData(mockPlanetData)).toEqual(expected)
    })
  })

  
})

