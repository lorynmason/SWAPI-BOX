export const fetchScroll = async () => {
 const url = 'https://swapi.co/api/films';
 const response = await fetch(url);
 const filmsData = await response.json();
 return cleanFilmsData(filmsData)
}

export const cleanFilmsData = (data) => {
  return data.results.map((film) => {
    return {
      title: film.title,
      text: film.opening_crawl,
      date: film.release_date 
    }
  })
}


