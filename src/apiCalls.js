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
  const characterData = await response.json()
  return characterData
}

export const fetchNestedInfo = (characterData) => {
  const sadPromises = characterData.results.map( async (character) => {
      const response = await fetch(character.homeworld)
      const homeworlds = await response.json()
      const response2 =  await fetch(character.species)
      const species = await response2.json()
      return {homeworld: homeworlds.name,
              population: homeworlds.population,
              species: species.name,
              name: character.name}
  })
  return Promise.all(sadPromises)
}


export const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles'
  const response = await fetch(url);
  const vehicleData = await response.json()
  return vehicleData
}

export const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets'
  const response = await fetch(url);
  const planetData = await response.json()
  return planetData
}

export const fetchNestedInfoPlanets = (data) => {
  const sadPromises = data.results.map( async (planetObj) => {
   
    const residentsData = await fetchPlanetResidents(planetObj.residents)
    return {...planetObj, residents: residentsData}

    })
    return Promise.all(sadPromises)
}


export const fetchPlanetResidents = (data) => {
  const residents =  data.map( async (resident) => {
      const response = await fetch(resident)
      const residents = await response.json()
      return residents.name
    })
    return Promise.all(residents)
}







