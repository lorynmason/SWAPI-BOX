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

// export const cleanCharacterData = (data) => {
//   const getHomeworlds = await API.fetchHomeworld(characterData)
//   return data.results.map((character) => {

//   })
// }
 

