import * as Cleaner from './cleaner'

describe('cleaner', () => {
  let mockFilmsData
  let mockVehicleData
  let mockPlanetData

  describe('cleanFilmsData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockFilmsData = {
        results: [
          {
            title: 'NewHope',
            opening_crawl: 'A long time ago',
            release_date: 1978,
            extra: 'did this get removed'
          }
        ]
      }
      const expected = [
        {
          title: 'NewHope',
          text: 'A long time ago',
          date: 1978
        }
      ]

      expect(Cleaner.cleanFilmsData(mockFilmsData)).toEqual(expected)
    })
  })

  describe('cleansVehiclesData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockVehicleData = {
        results: [
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
          }
        ]
      }
      const expected = [
        {
          id: 'Ford',
          Model: 'Explorer',
          Class: 'wheeled',
          Passengers: 3
        },
        {
          id: 'Chevy',
          Model: 'Tahoe',
          Class: 'wheeled',
          Passengers: 3
        }
      ]
      expect(Cleaner.cleanVehiclesData(mockVehicleData)).toEqual(expected)
    })
  })

  describe('cleanPlanetData', () => {
    it('returns a list of objects with the correct properties', () => {
      mockPlanetData = [
        {
          name: 'Earth',
          terrain: 'Rocky',
          population: 34,
          climate: 'hot',
          residents: [],
          somethingToRemove: 'blah blah'
        },
        {
          name: 'Pluto',
          terrain: 'water',
          population: 1,
          climate: 'cold',
          residents: [],
          somethingToRemove: 'blah blah'
        }
      ]

      const expected = [
        {
          id: 'Earth',
          Terrain: 'Rocky',
          Population: 34,
          Climate: 'hot',
          Residents: 'No Known Occupants'
        },
        {
          id: 'Pluto',
          Terrain: 'water',
          Population: 1,
          Climate: 'cold',
          Residents: 'No Known Occupants'
        }
      ]
      expect(Cleaner.cleanPlanetData(mockPlanetData)).toEqual(expected)
    })
  })
})
