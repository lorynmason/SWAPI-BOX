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
      name: character.name,
      id: character.name,
      category: 'characters',
      info: {Homeworld: character.homeworld,
        Population: character.population,
        Species: character.species}
    }
  })
}

export const cleanVehiclesData = (data) => {
  return data.results.map((vehicle) => {
    return {
      name: vehicle.name,
      id: vehicle.name,
      category: 'vehicles',
      info: {Model: vehicle.model,
            Class: vehicle.vehicle_class,
            Passengers: vehicle.passengers}
    }
  })
}

export const cleanPlanetData = (data) => {
  return data.map((planet) => {
    return {
      name: planet.name,
      id: planet.name,
      category: 'planets',
      info: {Terrain: planet.terrain,
            Population: planet.population,
            Climate: planet.climate,
            Residents: planet.residents}
    }
    console.log(planet)
  })


}
