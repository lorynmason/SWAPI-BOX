export const fetchScroll = async () => {
 const url = 'https://swapi.co/api/films';
 const response = await fetch(url);
 const filmsData = await response.json();
 return cleanFilmsData(filmsData)
}

//move to cleaner file 
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


