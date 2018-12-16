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
      Homeworld: character.homeworld,
      Population: character.population,
      Species:  character.species
    }
  })
}

export const cleanVehiclesData = (data) => {
  return data.results.map((vehicle) => {
    return {
      id: vehicle.name,
      Model: vehicle.model,
      Class: vehicle.vehicle_class,
      Passengers: vehicle.passengers
    }
  })
}

export const cleanPlanetData = (data) => {
  return data.map((planet) => {
    let residents = planet.residents.join(', ')
    if (planet.residents.length === 0) {
      residents = 'No Known Occupants'
    }
    return {
      id: planet.name,
      Terrain: planet.terrain,
      Population: planet.population,
      Climate: planet.climate,
      Residents: residents
    }
  })
}
