export const fetchData = async (url) => {
  const response = await fetch(url)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  throw new Error('Chewbacca- AGERUYEHSFG: translation, Error, API returned not okay')
}

export const getMoreCharacterData = (mapData) => {
  const unresolvedPromise = mapData.map(async ({ homeworld, species, name }) => {
      homeworld = await fetchData(homeworld)
      species = await fetchData(species[0])
      return {
        id: name, 
        Homeworld: homeworld.name,
        Population: homeworld.population, 
        Species: species.name
      }
  })
  return Promise.all(unresolvedPromise)
}

export const fetchPlanetResidents = (data) => {
  const residentsData = data.map(async (resident) => {
    const response = await fetchData(resident)
    return response
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
