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
      catagory: 'characters'
    }
  })
}

export const cleanVehiclesData = (data) => {
  return data.results.map((vehicle) => {
    return {
      Name: vehicle.name,
      Model: vehicle.model,
      Class: vehicle.vehicle_class,
      Passengers: vehicle.passengers,
      id: vehicle.name,
      catagory: 'vehicles'
    }
  })
}

export const cleanPlanetData = (data) => {
  return data.map((planet) => {
    return {
      planet: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents,
      id: planet.name,
      catagory: 'planets'
    }
  })


}
