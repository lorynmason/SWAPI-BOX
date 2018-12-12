export const cleanFilmsData = (data) => {
  const films = data.results.map((film) => {
    return {
      title: film.title,
      text: film.opening_crawl,
      date: film.release_date
    }
  })
  return films
}

export const cleanCharacterData = (data) => {
  return data.map((character) => {
    return {
      id: character.name,
      category: 'characters',
      info: {
        Name: character.name,
        Homeworld: `Homeworld:  ${character.homeworld}`,
        Population: `Population:  ${character.population}`,
        Species: `Species:  ${character.species}`
      }
    }
  })
}

export const cleanVehiclesData = (data) => {
  return data.results.map((vehicle) => {
    return {
      id: vehicle.name,
      category: 'vehicles',
      info: {
        Name: vehicle.name,
        Model: `Model:  ${vehicle.model}`,
        Class: `Class:  ${vehicle.vehicle_class}`,
        Passengers: `Passengers:  ${vehicle.passengers}`
      }
    }
  })
}

export const cleanPlanetData = (data) => {
  return data.map((planet) => {
    if (planet.residents.length <= 0) {
      planet.residents = 'No known occupants'
    }
    return {
      id: planet.name,
      category: 'planets',
      info: {
        Name: planet.name,
        Terrain: `Terrain:  ${planet.terrain}`,
        Population: `Population:  ${planet.population}`,
        Climate: `Climate:  ${planet.climate}`,
        Residents: `Residents:  ${planet.residents}`
      }
    }
  })
}
