export const fetchScroll = async () => {
 const url = 'https://swapi.co/api/films';
 const response = await fetch(url);
 if(response.ok) {
    const filmsData = await response.json();
  return filmsData
  } else {
    throw new Error('Yoda- ERROR has detected, API returned okay NOT')
  }
}

export const fetchCharacters = async () => {
  const url = 'https://swapi.co/api/people'
  const response = await fetch(url);
  if(response.ok) {
    const characterData = await response.json()
    return characterData
  } else {
    throw new Error('Chewbacca- AGERUYEHSFG: translation, Error, API returned not okay')
  }
}

export const fetchCharactersHomeWorld = (characterData) => {
  const unresolvedPromise = characterData.results.map( async (character) => {
    const response = await fetch(character.homeworld)
    if(response.ok) {
      const homeworld = await response.json()
      characterData = {...character, homeworld: homeworld.name, population: homeworld.population}
      return characterData
    } else {
      throw new Error('Chewbacca- 2AGERUYEHSFG: translation, Error, API2 returned not okay')
    }
  })
  return Promise.all(unresolvedPromise)
}

export const fetchCharactersSpecies = (characterData2) => {
  const unresolvedPromise = characterData2.map( async (character) => {
    const response = await fetch(character.species)
    if(response.ok) {
      const species = await response.json()
      characterData2 = {...character, species: species.name}
      return characterData2
    } else {
      throw new Error('Chewbacca- 3AGERUYEHSFG: translation, Error, API3 returned not okay')
    }
  })
  return Promise.all(unresolvedPromise)
}

export const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles'
  const response = await fetch(url);
  const vehicleData = await response.json()
  return vehicleData
}







