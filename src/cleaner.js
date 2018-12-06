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

export const cleanVehiclesData = (data) => {
  return data.results.map(vehicle => {
    return {
      Name: vehicle.name,
      Model: vehicle.model,
      Class: vehicle.vehicle_class,
      Passengers: vehicle.passengers
    }
  })
}
 

