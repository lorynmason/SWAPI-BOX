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
      homeworld: character.homeworld,
      population: character.population,
      species: character.species,
      name: character.name,
      id: character.name,
      category: 'characters'
    }
  })
}

export const cleanVehiclesData = (data) => {
  return data.results.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      id: vehicle.name,
      category: 'vehicles'
    }
  })
}

export const cleanPlanetData = (data) => {
  return data.map((planet) => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents,
      id: planet.name,
      category: 'planets'
    }
  })


}
