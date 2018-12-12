export const fetchScroll = async () => {
  const url = 'https://swapi.co/api/films'
  const response = await fetch(url)
  if (response.ok) {
    const filmsData = await response.json()
    return filmsData
  }
  throw new Error('Yoda- ERROR has detected, API returned okay NOT')
}

export const fetchCharacters = async () => {
  const url = 'https://swapi.co/api/people'
  const response = await fetch(url)
  if (response.ok) {
    const characterData = await response.json()
    return characterData
  }
  throw new Error('Chewbacca- AGERUYEHSFG: translation, Error, API returned not okay')
}

export const fetchCharactersHomeWorld = (characterData) => {
  const unresolvedPromise = characterData.results.map(async (character) => {
    const response = await fetch(character.homeworld)
    if (response.ok) {
      const homeworld = await response.json()
      characterData = {
        ...character,
        homeworld: homeworld.name,
        population: homeworld.population
      }
      return characterData
    }
    throw new Error('Chewbacca- 2AGERUYEHSFG: translation, Error, API2 returned not okay')
  })
  return Promise.all(unresolvedPromise)
}

export const fetchCharactersSpecies = (characterData2) => {
  const unresolvedPromise = characterData2.map(async (character) => {
    const response = await fetch(character.species)
    if (response.ok) {
      const species = await response.json()
      characterData2 = {
        ...character,
        species: species.name
      }
      return characterData2
    }
    throw new Error('Chewbacca- 3AGERUYEHSFG: translation, Error, API3 returned not okay')
  })
  return Promise.all(unresolvedPromise)
}

export const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles'
  const response = await fetch(url)
  if (response.ok) {
    const vehicleData = await response.json()
    return vehicleData
  }
  throw new Error('Obi-Wan Kenobi says Error, these are not the droids you are looking for')
}

export const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets'
  const response = await fetch(url)
  if (response.ok) {
    const planetData = await response.json()
    return planetData
  }
  throw new Error('Chewbacca- AGERUYEHSFG: translation, Error, planet not okay')
}

export const fetchPlanetResidents = (data) => {
  const residentsData = data.map(async (resident) => {
    const response = await fetch(resident)
    if (response.ok) {
      const residents = await response.json()
      return residents.name
    }
    throw new Error('Chewbacca- AGERUYEHSFG: translation, Error, planet2 not okay')
  })
  return Promise.all(residentsData)
}

export const fetchNestedInfoPlanets = (data) => {
  const sadPromises = data.results.map(async (planetObj) => {
    const residentsData = await fetchPlanetResidents(planetObj.residents)
    return {
      ...planetObj,
      residents: residentsData
    }
  })
  return Promise.all(sadPromises)
}
