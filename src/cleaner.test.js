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
          homeworld: 'Earth',
          population: '123456789',
          species: 'human',
          name: 'bob',
          id: 'bob',
          category: 'characters'
        },
        {
          homeworld: 'Venus',
          population: '32',
          species: 'K-9',
          name: 'we call him alien',
          id: 'we call him alien',
          category: 'characters'
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
          name: 'Ford',
          model: 'Explorer',
          class: 'wheeled',
          passengers: 3,
          id: 'Ford',
          category: 'vehicles'
        },
        {
          name: 'Chevy',
          model: 'Tahoe',
          class: 'wheeled',
          passengers: 3,
          id: 'Chevy',
          category: 'vehicles'
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

      const expected = [{planet: 'Earth',
      terrain: 'Rocky',
      population: 34,
      climate: 'hot',
      residents: ['bob', 'sally', 'yoda'],
      id: 'Earth',
      category: 'planets'
      },
      {planet: 'Pluto',
      terrain: 'water',
      population: 1,
      climate: 'cold',
      residents: [],
      id: 'Pluto',
      category: 'planets'
    }]
      expect(Cleaner.cleanPlanetData(mockPlanetData)).toEqual(expected)
    })
  })

  
})

