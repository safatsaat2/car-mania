export async function fetchCars(){
  const  headers= {
        'x-rapidapi-key': '550149cc7emshbf11af70ee9d0fdp1f28fcjsncde337290a62',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers:headers,
      }) ;
      const result = await response.json();

      return result;
}