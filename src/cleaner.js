export const cleanFilmsData = (data) => {
  const randomNum = Math.floor(Math.random() * Math.floor(6))
  return data.results.map((film) => {
    return {
      title: film.title,
      text: film.opening_crawl,
      date: film.release_date 
    }
  })[randomNum]
}

export const cleanCharacterData = (data) => {
  return data.map((character) => {
    return {
      homeworld: character.homeworld,
      population: character.population,
      species: character.species,
      name: character.name,
      id: character.name
    }
  })
}

export const cleanVehiclesData = (data) => {
  return data.results.map(vehicle => {
    return {
      Name: vehicle.name,
      Model: vehicle.model,
      Class: vehicle.vehicle_class,
      Passengers: vehicle.passengers,
      id: vehicle.name
    }
  })
}

export const cleanPlanetData = (data) => {
  return data.map( planet => {
    return {
      planet: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents,
      id: planet.name
    }
  })
}
 

